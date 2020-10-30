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

# 生命周期函数 指在某一个时刻组件会自动调用执行的函数

![]('./src/images/React生命周期.png')

## React 生命周期函数

```javascript
//  在组件即将被挂在到页面的时刻自动执行
//  原名componentWillMount
UNSAFE_componentWillMount() {
  console.log('UNSAFE_componentWillMount')
}

// 当组件的state或者props发生改变的时候，render函数就会重新执行
render

//  组件被挂在到页面之后，自动被执行
componentDidMount() {
  console.log('componentDidMount')
}

// 组件被更新之前， 它会自动被执行
// 原名componentWillUpdate
UNSAFE_componentWillUpdate() {
  console.log('UNSAFE_componentWillUpdate')
  return true
}

// 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行
// 如果 返回true 它才执行
// 如果 返回false 这个函数就不会执行
componentWillUpdate() {
  console.log('componentWillUpdate')
}

// 组件更新完成之后，它会被执行
componentDidUpdate() {
  console.log('componentDidUpdate')
}

// 当一个组件从父组件接受参数
// (只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行)
// 如果这个组件第一次存在于父组件中，不会执行
// 如果这个组件之前已经存在于父组件中，才会执行
UNSAFE_componentWillReceiveProps() {
  console.log('child UNSAFE_componentWillReceiveProps')
}

// 组件卸载之前执行的函数
componentWillUnmount() {
  console.log('child componentWillUnmount')
}


```

