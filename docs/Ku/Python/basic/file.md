---

layout: doc
title: 文件操作
---
# 文件操作
## 文件的打开与关闭

::: tip 方法 1
- 在 Python 中，使用`open()`函数来打开文件，使用`close()`方法关闭文件。 
- `open()` 函数的第一个参数是文件路径，第二个参数是`打开模式`  


|`r`|`w`|`a`|`x`|`b`|`t`|
|:-:|:-:|:-:|:-:|:-:|:-:|
|只读模式（默认）|写入模式（会覆盖原有文件）|追加模式|创建模式|二进制模式|文本模式|  

:::  

```py
file = open('example.txt', 'r')  # 以只读模式打开文件
file.close()  # 关闭文件,这里一定要写否则文件会一直处于打开状态，造成资源泄露和内存消耗

```

---

:::tip 方法 2
- 推荐使用 `with` 语句来处理文件，因为它会自动管理文件的打开和关闭，避免资源泄漏

:::
```py
with open('example.txt', 'r') as file: # as 这里是起名字
    # 在 with 块内使用文件
    content = file.read()
# 离开 with 块后，文件会自动关闭
```

## 文件的读取与写入
:::tip 读取文件
- 推荐 `with` 语句 打开模式 `r`
:::
1. 读取全部内容

```py
with open('example.txt', 'r') as file:
    content = file.read()  # 读取整个文件内容到一个字符串
    print(content)
```
2. 逐行读取

```py
with open('example.txt', 'r') as file:
    for line in file:  # 逐行读取文件内容，用到了for循环遍历
        print(line)

```  

---  


:::danger 写入文件
- 写入文件时，需要使用 `w`（覆盖写入模式）或 `a`（追加模式）。
:::

```py
# 写入模式（覆盖原有内容）
with open('example.txt', 'w') as file: 
    file.write('Hello, World!\n')  # 写入字符串
    file.writelines(['Line 1\n', 'Line 2\n'])  # 写入多行（列表形式）
    
# --------------------------------------------------------

# 追加模式
with open('example.txt', 'a') as file:
    file.write('我是新来的内容，不会覆盖删除原来的内，我会默默跟到后面')

```
::: details 关于编码报错`UnicodeDecodeError`
- 当你文件里有中文时候，可能会报错有关编码问题，这里其实是编码不匹配。
- `解决`：再加一个参数`encoding="utf-8"`
- 了解一下[计算机编码→](/Other/computer-basics/#计算机编码详解)
```py
# 示例：文件实际用 utf-8 编码，明确指定
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()  # 正确解码
```
:::
