import subprocess
import time
import shutil
import os
import zipfile
from datetime import datetime
from tqdm import tqdm  # 用于显示进度条

# ================= 配置区域 =================
# 从环境变量读取配置，设置合理的默认值
SERVER_IP = os.getenv('SERVER_IP', '')
SERVER_PORT = int(os.getenv('SERVER_PORT', 22))  # 默认22
SERVER_USER = os.getenv('SERVER_USER', 'root')   # 默认root
SERVER_PASSWORD = os.getenv('SERVER_PASSWORD', '')

# 服务器部署路径：自动使用服务器IP构建路径
SERVER_PATH = os.getenv('SERVER_PATH', f'/www/wwwroot/{SERVER_IP}')

# 本地路径配置
LOCAL_DIST_PATH = os.path.join('.vitepress', 'dist')  # VitePress生成的dist目录
LOCAL_ZIP_PATH = 'dist.zip'  # 压缩后的zip文件路径

# 日志文件路径
LOG_FILE = 'deploy_log.txt'

# 校验必要配置（仅校验IP和密码）
if not all([SERVER_IP, SERVER_PASSWORD]):
    raise ValueError("缺少必要的服务器配置！请确保设置了SERVER_IP和SERVER_PASSWORD环境变量。")
# ===========================================


def log(message):
    """记录日志"""
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    log_message = f'[{timestamp}] {message}\n'
    print(log_message, end='')
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(log_message)


def clean_old_dist():
    """清理旧的dist文件夹"""
    log(f'清理旧的dist文件夹: {LOCAL_DIST_PATH}')
    if os.path.exists(LOCAL_DIST_PATH):
        try:
            shutil.rmtree(LOCAL_DIST_PATH)
            log('dist文件夹清理完成!')
        except Exception as e:
            log(f'清理dist文件夹时发生错误: {str(e)}')
            return False
    else:
        log('dist文件夹不存在，无需清理')
    
    # 清理旧的zip文件
    if os.path.exists(LOCAL_ZIP_PATH):
        try:
            os.remove(LOCAL_ZIP_PATH)
            log(f'旧的压缩文件 {LOCAL_ZIP_PATH} 已删除')
        except Exception as e:
            log(f'删除旧压缩文件时发生错误: {str(e)}')
            return False
    return True


def run_npm_build():
    """执行npm打包命令（适配GitHub Actions环境）"""
    log('开始执行npm打包命令...')
    try:
        # 使用系统默认npm命令（适配Linux环境）
        result = subprocess.run(
            ['npm', 'run', 'docs:build'],
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding='utf-8',
            cwd=os.getcwd()
        )
        log('npm打包完成!')
        log(f'打包输出:\n{result.stdout}')
        return True
    except subprocess.CalledProcessError as e:
        log(f'npm打包失败: {str(e)}')
        log(f'错误输出:\n{e.stderr}')
        return False
    except Exception as e:
        log(f'执行npm命令时发生未知错误: {str(e)}')
        return False


def check_dist_folder():
    """检查dist文件夹是否存在"""
    log(f'检查dist文件夹: {LOCAL_DIST_PATH}')
    if os.path.exists(LOCAL_DIST_PATH) and os.path.isdir(LOCAL_DIST_PATH):
        log('dist文件夹存在!')
        return True
    else:
        log('错误: dist文件夹不存在或不是目录!')
        return False


def compress_dist():
    """压缩dist文件夹为zip文件"""
    log(f'开始压缩dist文件夹到 {LOCAL_ZIP_PATH}')
    try:
        # 使用shutil创建zip压缩文件
        shutil.make_archive('dist', 'zip', LOCAL_DIST_PATH)
        log('dist文件夹压缩完成!')
        return True
    except Exception as e:
        log(f'压缩dist文件夹时发生错误: {str(e)}')
        return False


def upload_zip_to_server():
    """上传zip文件到服务器"""
    log(f'开始上传压缩文件 {LOCAL_ZIP_PATH} 到服务器: {SERVER_IP}:{SERVER_PATH}')
    try:
        import paramiko

        # 创建SSH客户端
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        # 连接服务器
        ssh.connect(
            hostname=SERVER_IP,
            port=SERVER_PORT,
            username=SERVER_USER,
            password=SERVER_PASSWORD
        )

        # 创建SFTP客户端
        sftp = ssh.open_sftp()

        # 确保服务器目标目录存在
        try:
            sftp.stat(SERVER_PATH)
        except FileNotFoundError:
            log(f'创建服务器目录: {SERVER_PATH}')
            ssh.exec_command(f'mkdir -p {SERVER_PATH}')

        # 上传zip文件
        remote_zip_path = os.path.join(SERVER_PATH, 'dist.zip').replace('\\', '/')
        file_size = os.path.getsize(LOCAL_ZIP_PATH)

        # 创建进度条
        with tqdm(total=file_size, unit='B', unit_scale=True, desc='上传进度') as progress_bar:
            # 自定义回调函数更新进度条
            def callback(transferred, total):
                progress_bar.update(transferred - progress_bar.n)

            sftp.put(LOCAL_ZIP_PATH, remote_zip_path, callback=callback)

        # 关闭连接
        sftp.close()
        ssh.close()

        log('压缩文件上传完成!')
        return True
    except ImportError:
        log('错误: 未找到paramiko或tqdm库。请先安装: pip install paramiko tqdm')
        return False
    except Exception as e:
        log(f'上传压缩文件时发生错误: {str(e)}')
        return False


def extract_zip_on_server():
    """在服务器上解压zip文件"""
    log('开始在服务器上解压文件...')
    try:
        import paramiko

        # 创建SSH客户端
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        # 连接服务器
        ssh.connect(
            hostname=SERVER_IP,
            port=SERVER_PORT,
            username=SERVER_USER,
            password=SERVER_PASSWORD
        )

        # 执行解压命令
        remote_zip_path = os.path.join(SERVER_PATH, 'dist.zip').replace('\\', '/')
        command = f'unzip -o {remote_zip_path} -d {SERVER_PATH}'
        stdin, stdout, stderr = ssh.exec_command(command)

        # 等待命令执行完成
        exit_status = stdout.channel.recv_exit_status()

        if exit_status == 0:
            log('文件解压成功!')
            # 删除服务器上的zip文件
            ssh.exec_command(f'rm -f {remote_zip_path}')
            log('服务器上的临时zip文件已删除')
        else:
            log(f'解压失败，退出状态码: {exit_status}')
            log(f'错误输出: {stderr.read().decode("utf-8", errors="ignore")}')
            return False

        # 关闭连接
        ssh.close()
        return True
    except Exception as e:
        log(f'解压文件时发生错误: {str(e)}')
        return False


def main():
    """主函数"""
    log('====== 开始部署流程 ======')
    log(f'部署配置: IP={SERVER_IP}, 用户={SERVER_USER}, 端口={SERVER_PORT}, 路径={SERVER_PATH}')
    
    # 1. 清理旧的dist文件夹和zip文件
    if not clean_old_dist():
        log('部署失败: 清理旧文件失败')
        log('====== 部署流程终止 ======')
        return

    # 2. 执行npm打包命令
    if not run_npm_build():
        log('部署失败: npm打包失败')
        log('====== 部署流程终止 ======')
        return

    # 3. 检查dist文件夹是否存在
    if not check_dist_folder():
        log('部署失败: dist文件夹不存在')
        log('====== 部署流程终止 ======')
        return

    # 4. 压缩dist文件夹
    if not compress_dist():
        log('部署失败: 压缩dist文件夹失败')
        log('====== 部署流程终止 ======')
        return

    # 5. 上传zip文件到服务器
    if not upload_zip_to_server():
        log('部署失败: 上传压缩文件失败')
        log('====== 部署流程终止 ======')
        return

    # 6. 在服务器上解压zip文件
    if not extract_zip_on_server():
        log('部署失败: 在服务器上解压文件失败')
        log('====== 部署流程终止 ======')
        return

    # 7. 清理本地zip文件
    if os.path.exists(LOCAL_ZIP_PATH):
        try:
            os.remove(LOCAL_ZIP_PATH)
            log(f'本地临时压缩文件 {LOCAL_ZIP_PATH} 已删除')
        except Exception as e:
            log(f'删除本地压缩文件时发生错误: {str(e)}')

    log('====== 部署成功完成 ======')


if __name__ == '__main__':
    main()
