import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    // console.log('TodoItem render')
    const { content, test } = this.props
    // JSX => createElement => 虚拟DOM(JS 对象) => 真实的DOM
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
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
