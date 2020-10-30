import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      a: 1
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('TodoItem -> shouldComponentUpdate -> nextProps, nextState', nextProps, nextState)
    // if (nextProps.content !== this.props.content) {
    //   return true
    // } else {
    //   return false
    // }
    return nextProps.content !== this.props.content
  }

  render() {
    console.log('TodoItem render')
    const { content } = this.props
    // JSX => createElement => 虚拟DOM(JS 对象) => 真实的DOM
    return <div onClick={this.handleClick}>{content}</div>
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default TodoItem
