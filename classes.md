## 1. state 数据
## 2. JSX模板
## 3. 数据 + 模板 结合，生成真实的DOM，来显示
## 4. state 发生改变 
## 5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

### 缺陷：
>第一次生成了一个完整的DOM片段

>第二次生成了一个完整的DOM片段

>第二次的DOM替换第一次的DOM，非常耗性能

# 优化
## 1. state 数据
## 2. JSX模板
## 3. 数据 + 模板 结合，生成真实的DOM，来显示
## 4. state 发生改变 
## 5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
## 6. 新的DOM(DocumentFragment) 和 原始的DOM 做比对，找差异
## 7. 找出input框发生了变化
## 8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

### 缺陷：
> 性能的提升并不明显

## 1. state 数据
## 2. JSX模板
## 3. 数据 + 模板 结合，生成真实的DOM，来显示
`<div id='abc'><span>Hello World</span></div>`
## 4. 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)（损耗了性能）
`['div',{id:'abc'},['span',{},'Hello World']]`
## 5. state 发生变化
## 6. 数据 + 模板 生成新的虚拟DOM（极大的提升了性能）
`['div',{id:'abc'},['span',{},'bye bye']]`
## 7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容（极大的提升了性能）
## 8. 直接操作DOM，改变span中的内容

# React 数据视图更新原理
## 1. state 数据
## 2. JSX模板

## 3. 数据 + 模板 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)（损耗了性能）
`['div',{id:'abc'},['span',{},'Hello World']]`

## 4. 用虚拟DOM的结构生成真实的DOM，来显示
`<div id='abc'><span>Hello World</span></div>`

## 5. state 发生变化

## 6. 数据 + 模板 生成新的虚拟DOM（极大的提升了性能）
`['div',{id:'abc'},['span',{},'bye bye']]`

## 7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容（极大的提升了性能）

## 8. 直接操作DOM，改变span中的内容

### 优点
1. 性能提升了。
2. 它使得跨端应用得以实现。 React Native
