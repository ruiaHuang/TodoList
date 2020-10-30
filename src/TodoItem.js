import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    console.log('TodoItem render')
    const { content, test } = this.props
    // JSX => createElement => 虚拟DOM(JS 对象) => 真实的DOM
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
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

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem
