import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Input
          allowClear
          value={this.state.inputValue}
          placeholder='fuck you'
          style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}></Input>
        <Button type='primary' onClick={this.handleBtnClick}>
          提交
        </Button>
        <List
          style={{ width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={() => this.handleItemDelete(index)}> {item}</List.Item>}
        />
      </div>
    )
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  handleChange = (e) => {
    let value = e.target.value
    const action = {
      value,
      type: 'CHANGE_INPUT_VALUE'
    }
    store.dispatch(action)
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleBtnClick = () => {
    const action = {
      type: 'ADD_TODO_ITEM'
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = {
      index,
      type: 'DELETE_TODO_ITEM'
    }
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(() => store.getState())
  }
}

export default TodoList
