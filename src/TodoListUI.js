// import React from 'react'
import { Input, Button, List } from 'antd'

// 当一个组件只有一个render函数时，可以替换成 下面的 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <Input
        allowClear
        value={props.inputValue}
        placeholder='fuck you'
        style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}></Input>
      <Button type='primary' onClick={props.handleBtnClick}>
        提交
      </Button>
      <List
        style={{ width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => props.handleItemDelete(index)}> {item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI
