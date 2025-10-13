---
layout: doc
title: 代码块的进阶玩法
---

# 代码块的进阶玩法
如果你还不知道如何生成一个代码块请来[这里](../basic/syntax.md#六、代码块)

## 高亮
:::tip 说明
在第一个```后面加上`{}`，里面放数字，用 `,` 隔开。代表第几行选择高亮  
用 `-` 连接的数字代表起始行到末尾行都高亮  

在其行写入` // [!code highlight]` 的可以,但是不一定能生效，要用到玄乎写法。原因下面讲的聚焦代码块有说明

:::
输入：
````
```html{1,3,5-7}
<div>你好</div>
<div>华子</div>
<div>我是</div>
<div>你的</div>
<div>手下</div>
<div>败将</div>
<div>跪求</div>
<div>放我一马</div>
```
````
输出
```html{1,3,5-7}
<div>你好</div>
<div>华子</div>
<div>我是</div>
<div>你的</div>
<div>手下</div>
<div>败将</div>
<div>跪求</div>
<div>放我一马</div>
```

## 聚焦  
示例 1：输入
````
```python
for i in range(1,100):
    print('520')  // [! code focus]
    print('I Love You')
``` 
````
示例 2：输入

python{}   这里多了一个`{}`   
for i in range(1,100):    
    // [!code focus]  聚焦代码不在一行非标准玄乎写法  
print('520')  
print('I Love You')


输出效果：
```python{} 
for i in range(1,100):   
   // [!code focus]
     print('520')
print('I Love You') ,  
``` 
:::warning 警告
示例 1 可能不会生效，ai说这不是markdown官方通用的聚焦语法。我这里能出效果是因为，这应该是Microsoft Docs（微软）平台的效果，或者是浏览器渲染的效果。 

我这里的示例 1 输入是标准写法，不一定生效，示例 2 是玄乎写法能渲染出效果。  

但是我目前还是没研究明白，`// [!code xxxx]` 语法标准怎么写，到底怎么可以生效，一种可能是被识别成了文档不生效和 `{}` 没加，另一种原因就是插件渲染问题了。下面讲关于这 `// [!code xxxx]` 语法的只能自己捣鼓用玄乎的方法尝试了
:::

## 增减
示例1：
在第一个代码块```后面加上diff即可 `+` 为绿色 `-` 为红色
输出：
```diff
- print
+ print
```
示例2：在该行插入`// [!code --]` 或者 `// [!code ++]`

```
for i in rang(1,10):
    for j in rang(1,i+1):  
        // [!code --]
    if j>i :    
        print(f'{j}*{i}={i*j}',end='') 
            // [!code ++]
print('')
```

## 错误和警告
示例1：在该行插入`// [!code error]` 或者 `// [!code warning]`

```
for i in rang(1,10):
    for j in rang(1,i+1):  
        // [!code error]  
    if j>i :    
        print(f'{j}*{i}={i*j}',end='') 
            // [!code warning]  
print('')
```
## 代码组
示例：输入
````
::: code-group
```python
print('hello world!')
```

```html
<div>hello world!</div>
```
:::
````



输出：

::: code-group

```python
print('hello world!')
```

```html
<div>hello world!</div>
```
:::

## 代码组的嵌套
示例 输入：
`````
````
```python
print('hello,world!')

```
````
`````
输出效果：

````
```python
print('hello,world!')

```
````

:::tip 提示
如果还想进行嵌套表示，累计增加最外层反引号的个数
:::








