import React, { Component } from 'react'
import 'antd/dist/antd.css'
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
        <div style={{ marginBottom: '10px' }}>
          <Input value={this.state.inputValue} placeholder='todo info' style={{ width: '300px', marginRight: '10px' }} onChange={this.handleInputChange}></Input>
          <Button type='primary' onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List style={{ width: '300px' }} bordered dataSource={this.state.list} renderItem={(item) => <List.Item>{item}</List.Item>} />
      </div>
    )
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange = (e) => {
    let value = e.target.value
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value
    }
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = {
      type: 'ADD_TODO_ITEM'
    }
    store.dispatch(action)
  }

  handleStoreChange = () => {
    console.log(store)
    this.setState(() => store.getState())
  }
}

export default TodoList
