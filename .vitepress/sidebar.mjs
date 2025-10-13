export default {
    '/Ku/Python/': [
        {
            text: '基础',
            collapsible: true,
            collapsed: false,
            items: [
                {text:'前言', link: '/Ku/Python/basic/qianyan.md'},
                { text: 'Python 简介', link: '/Ku/Python/basic/intro.md' },
                { text: '环境搭建与 IDE', link: '/Ku/Python/basic/env.md' },
                { text: '变量与数据类型', link: '/Ku/Python/basic/datatype.md' },
                { text: '运算符', link: '/Ku/Python/basic/operator.md' },
                { text: '判断和循环语句', link: '/Ku/Python/basic/if.md' },
                { text: '函数与模块', link: '/Ku/Python/basic/function.md' },
                { text: '异常处理', link: '/Ku/Python/basic/exception.md' },
                { text: '文件操作', link: '/Ku/Python/basic/file.md' },
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '面向对象编程', link: '/Ku/Python/advanced/oop.md' },
                { text: '装饰器与生成器', link: '/Ku/Python/advanced/decorator.md' },
                { text: '迭代器', link: '/Ku/Python/advanced/iterator.md' },
                { text: 'Lambda 表达式', link: '/Ku/Python/advanced/lambda.md' },
                { text: '推导式', link: '/Ku/Python/advanced/comprehension.md' },
                { text: '正则表达式', link: '/Ku/Python/advanced/regex.md' },
                { text: '模块与包管理', link: '/Ku/Python/advanced/module.md' },
                { text: '虚拟环境', link: '/Ku/Python/advanced/venv.md' }
            ]
        },
        {
            text: '实战',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '爬虫基础与实战', link: '/Ku/Python/practice/crawler.md' },
                { text: '数据分析', link: '/Ku/Python/practice/data-analysis.md' },
                { text: '可视化', link: '/Ku/Python/practice/visualization.md' },
                { text: 'Web 开发', link: '/Ku/Python/practice/web.md' },
                { text: '自动化脚本', link: '/Ku/Python/practice/automation.md' },
                { text: '项目实战案例', link: '/Ku/Python/practice/project.md' }
            ]
        },
        {
            text: '奇技淫巧',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '代码调试与测试', link: '/Ku/Python/tips/debug.md' },
                { text: '性能优化', link: '/Ku/Python/tips/optimize.md' },
                { text: '常用第三方库', link: '/Ku/Python/tips/libs.md' },
                { text: '代码规范与风格', link: '/Ku/Python/tips/pep8.md' },
                { text: '常见面试题', link: '/python/tips/interview.md' },
                { text: '学习资源', link: '/python/tips/resources.md' }
            ]
        }
    ],
    '/Ku/Linux/': [
        {
            text: '基础',
            collapsible: true,
            collapsed: false,
            items: [
                { text: 'Linux 简介与发行版', link: '/Ku/Linux/basic/intro.md' },
                { text: '安装与环境配置', link: '/Ku/Linux/basic/install.md' },
                { text: '文件与目录结构', link: '/Ku/Linux/basic/filesystem.md' },
                { text: '常用命令', link: '/Ku/Linux/basic/command.md' },
                { text: '文件编辑与查看', link: '/Ku/Linux/basic/edit.md' },
                { text: '权限与用户管理', link: '/Ku/Linux/basic/permission.md' },
                { text: '软件包管理', link: '/Ku/Linux/basic/package.md' },
                { text: '进程与系统管理', link: '/Ku/Linux/basic/process.md' },
                { text: '网络基础命令', link: '/Ku/Linux/basic/network.md' },
                { text: '系统日志与帮助', link: '/Ku/Linux/basic/log.md' }
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            collapsed: true,
            items: [
                { text: 'Shell 脚本基础', link: '/Ku/Linux/advanced/shell.md' },
                { text: '环境变量与配置', link: '/Ku/Linux/advanced/env.md' },
                { text: '定时任务', link: '/Ku/Linux/advanced/crontab.md' },
                { text: '服务与守护进程', link: '/Ku/Linux/advanced/service.md' },
                { text: '磁盘与文件系统管理', link: '/Ku/Linux/advanced/disk.md' },
                { text: '防火墙与安全', link: '/Ku/Linux/advanced/security.md' },
                { text: '远程管理', link: '/Ku/Linux/advanced/ssh.md' },
                { text: '文本处理工具', link: '/Ku/Linux/advanced/text.md' }
            ]
        },
        {
            text: '实战',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '常见服务器部署', link: '/Ku/Linux/practice/server.md' },
                { text: '自动化运维脚本', link: '/Ku/Linux/practice/ops.md' },
                { text: '日志分析与故障排查', link: '/Ku/Linux/practice/log.md' },
                { text: '多用户与权限实战', link: '/Ku/Linux/practice/user.md' },
                { text: '备份与恢复', link: '/Ku/Linux/practice/backup.md' },
                { text: '性能监控与优化', link: '/Ku/Linux/practice/monitor.md' },
                { text: '面试题与案例', link: '/Ku/Linux/practice/interview.md' }
            ]
        }
    ],
    '/Ku/Docker/': [
        {
            text: '基础',
            collapsible: true,
            collapsed: false,
            items: [
                { text: 'Docker 简介与安装', link: '/Ku/Docker/basic/intro.md' },
                { text: '核心概念（镜像、容器、仓库）', link: '/Ku/Docker/basic/concept.md' },
                { text: '常用命令', link: '/Ku/Docker/basic/command.md' },
                { text: 'Dockerfile 基础', link: '/Ku/Docker/basic/dockerfile.md' },
                { text: '数据卷与挂载', link: '/Ku/Docker/basic/volume.md' },
                { text: '网络基础', link: '/Ku/Docker/basic/network.md' }
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '多阶段构建', link: '/Ku/Docker/advanced/multistage.md' },
                { text: 'Compose 编排', link: '/Ku/Docker/advanced/compose.md' },
                { text: '镜像优化与安全', link: '/Ku/Docker/advanced/secure.md' },
                { text: '私有仓库搭建', link: '/Ku/Docker/advanced/registry.md' },
                { text: '网络高级用法', link: '/Ku/Docker/advanced/network-advanced.md' },
                { text: '与 CI/CD 集成', link: '/Ku/Docker/advanced/cicd.md' }
            ]
        },
        {
            text: '实战',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '常见服务容器化', link: '/Ku/Docker/practice/service.md' },
                { text: '前后端项目部署', link: '/Ku/Docker/practice/web.md' },
                { text: '数据持久化方案', link: '/Ku/Docker/practice/data.md' },
                { text: '日志与监控', link: '/Ku/Docker/practice/log.md' },
                { text: '故障排查与调优', link: '/Ku/Docker/practice/debug.md' }
            ]
        }
    ],
    '/Ku/qianduan/': [
        {
            text: '基础',
            collapsible: true,
            collapsed: false,
            items: [
                { text: 'HTML 简介与发展历史', link: '/Ku/qianduan/basic/intro.md' },
                { text: '常用结构标签', link: '/Ku/qianduan/basic/structure.md' },
                { text: '文本标签', link: '/Ku/qianduan/basic/text.md' },
                { text: '列表标签', link: '/Ku/qianduan/basic/list.md' },
                { text: '链接与图片', link: '/Ku/qianduan/basic/link-image.md' },
                { text: '表格', link: '/Ku/qianduan/basic/table.md' },
                { text: '表单', link: '/Ku/qianduan/basic/form.md' },
                { text: '注释与转义字符', link: '/Ku/qianduan/basic/comment-escape.md' }
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '语义化标签', link: '/Ku/qianduan/advanced/semantic.md' },
                { text: '多媒体标签', link: '/Ku/qianduan/advanced/media.md' },
                { text: 'HTML5 新特性', link: '/Ku/qianduan/advanced/html5.md' },
                { text: '表单高级用法', link: '/Ku/qianduan/advanced/form-advanced.md' },
                { text: '本地存储', link: '/Ku/qianduan/advanced/storage.md' },
                { text: 'SEO 基础', link: '/Ku/qianduan/advanced/seo.md' }
            ]
        },
        {
            text: '实战',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '静态页面项目实战', link: '/Ku/qianduan/practice/static-project.md' },
                { text: '响应式布局', link: '/Ku/qianduan/practice/responsive.md' },
                { text: '表单与交互实战', link: '/Ku/qianduan/practice/form-project.md' },
                { text: '常见页面模板', link: '/Ku/qianduan/practice/template.md' },
                { text: '性能优化实践', link: '/Ku/qianduan/practice/optimize.md' }
            ]
        }
    ],
    '/Other/markdown/': [
        {
            text: '基础',
            collapsible: true,
            collapsed: false,
            items: [
                { text: 'Markdown 简介', link: '/Other/markdown/basic/intro.md' },
                { text: '基本语法', link: '/Other/markdown/basic/syntax.md' },
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '扩展语法', link: '/Other/markdown/advanced/extension.md' },
                {text: '代码块的进阶', link: '/Other/markdown/advanced/codeblock.md' },
    
            ]
        },     
    ],
    '/Smoking/': [
        {
            text: '文案',
            collapsible: true,
            collapsed: false,
            items: [
                { text: '文案', link: '/Smoking/emo/index.md' }
            ]
        },
        {
           
            items: [
                { text: '日志', link: '/Smoking/life_log/index.md' }
            ]
        }
    ]
}


