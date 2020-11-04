import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Input
          allowClear
          value={this.props.inputValue}
          placeholder='fuck you'
          style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
          onChange={this.props.handleChange}
          onKeyDown={this.props.handleKeyDown}></Input>
        <Button type='primary' onClick={this.props.handleBtnClick}>
          提交
        </Button>
        <List
          style={{ width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={() => this.props.handleItemDelete(index)}> {item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI
