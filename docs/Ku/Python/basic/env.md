---
layout: doc
title: 下载python
---

# 配置python环境  
::: tip 提示

- 配置和部署环境，其大意就是安装在电脑一个东西

:::

- 进入官网：https://www.python.org/

1. 下载（windows篇）  

<img src="/img/py1.png" alt="图片丢失了" width="800px" height="300px">    

2. 安装  

<img src="/img/py2.png" alt="图片丢失了" width="800px" height="300px">  

::: details 安装说明  

1. 第一个勾选项，代表以管理员身份安装，如果不勾选，则可能文件安装失败
2. 第二个，则代表把python添加到环境变量里面（下面安装失败里有讲到环境变量），可以不勾选，但是非常强烈建议勾选
:::

3. 验证是否安装   

- 在桌面按下`win`+`r`键后，在弹出框输入cmd，回车打开命令提示符  

-  输入`python`后，回车，如果出现下面这样的图，则代表你安装成功了  

- [什么是cmd命令提示符→](/Other/computer-basics/index.md#终端cmd和powershell)

<img src="/img/py3.png" alt="图片丢失了" width="800px" height="300px">

---

::: details 安装失败？
- 如果出现不是这样的图，可能是在第二步安装过程中，有2个选项你没勾选。
1. 如果没勾选1选项，则需要重新安装，再安装时勾选即可
2. 如果只没勾选2选项，则需要手动配置环境变量
- 什么是环境变量？  
配置环境变量可以简化操作。例如，将某个程序的路径添加到 `PATH` 中后，可以在任意目录下直接运行该程序，而无需再找到这个程序的详细文件目录。
- `win`+`i`打开设置→系统→系统信息→高级系统设置→环境变量  

<img src="/img/py7.png" alt="图片丢失了" width="800px" height="300px">  

---  

<img src="/img/py4.png" alt="图片丢失了" width="800px" height="300px">  

- 这里推荐添加到系统变量，双击进入path，这里解释一下切换windows用户指的是下面这个

<img src="/img/py6.png" alt="图片丢失了" width="800px" height="300px">    

---

- pip第三方库你可以理解为，别人写了一些好用的功能脚本在这个库里面，你可以从这里面下载。  

<img src="/img/py5.png" alt="图片丢失了" width="800px" height="300px">  

:::
  
---

# 安装IDE

::: tip 说明
-  这里的IDE是集成开发环境意思，大白话来说就是编辑代码的一个软件，就像是你在备忘录编辑你的日记一样，这里IDE充当了备忘录角色。
- 在安装python时候，其实默认也安装了他自带的编辑器，不过很难用，没有代码提示，代码高亮等功能。
- 编辑代码的软件有很多这里我推荐Pycharm，当然也有其他好用的软件像VS Code
:::  

::: details python自带编辑器  

按下`win`键，找到p目录，双击打开

<img src="/img/py9.png" alt="图片丢失了" width="800px" height="300px">    

<img src="/img/py8.png" alt="图片丢失了" width="800px" height="300px">  

:::

1. 下载  

- 进入Pycharm官网：https://www.jetbrains.com/zh-cn/pycharm/  

::: info 说明
- pycharm有两个版本，专业版和社区版。
- 对于初学者来说社区版已经够用，而且免费。专业版需收费

:::
<img src="/img/py10.png" alt="图片丢失了" width="800px" height="300px">  

::: warning 警告 
- 点击下载后，新界面下拉找到社区版，有Community标识
- 如果你的电脑比较垃圾带不起来，请下载低版本的：https://www.jetbrains.com/zh-cn/pycharm/download/other.html
- 我推荐下载2024.3.2版本
:::

<img src="/img/py11.png" alt="图片丢失了" width="800px" height="300px">  


2. 安装

<img src="/img/pc1.png" alt="图片丢失了" width="800px" height="300px">    

::: details 安装说明
- 建议全部勾选
1. 安装完后会在桌面生成Pycharm图标
2. 将Pycharm添加到环境变量，可以在cmd里启动
3. 右击某个文件时候，会有选择Pycharm打开的选项栏
4. 默认打开后缀为.py,即python文件，以Pycharm方式打开

:::

::: details 汉化

<img src="/img/pc2.png" alt="图片丢失了" width="800px" height="300px">  

:::

::: tip 配置解释器

- Pycharm是个编辑代码的一个软件，写完代码后，它需要调用我们上面下载的python来运行我们写的代码。

:::


<img src="/img/pc3.png" alt="图片丢失了" width="800px" height="300px">  

---  

<img src="/img/pc4.png" alt="图片丢失了" width="800px" height="300px">  

---  

<img src="/img/pc5.png" alt="图片丢失了" width="800px" height="300px">  

---  

<img src="/img/pc6.png" alt="图片丢失了" width="800px" height="300px">  

::: details 虚拟环境说明

- 如果在配置解释器，你选择了选择现有，则会默认在当前文件夹生成一个虚拟的python环境。
- 为什么会有虚拟环境？
1. 虚拟环境可以避免，不同而版本相同的第三方库包导致的错误冲突  
例如：有2个文件夹，同时开发了2个python游戏。都需要用到名为`pygame`不同版本的库。  
如果都用本地的解释器，无法满足2个不同版本的同一个库。这时候创建两个虚拟环境，让他们隔离开来就行了。

:::




