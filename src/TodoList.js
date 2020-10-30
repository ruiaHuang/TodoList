import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    console.log(1)
  }

  //  在组件即将被挂在到页面的时刻自动执行
  //  原名componentWillMount
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount')
  }

  render() {
    console.log('TodoList render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input id='insertArea' className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    )
  }

  // 组件被挂在到页面之后，自动被执行
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

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />
    })
  }

  handleInputChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

// function TodoList() {
//   return (
//     <>
//       <div>
//         <input />
//         <button>提交</button>
//       </div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </>
//   )
// }

export default TodoList
