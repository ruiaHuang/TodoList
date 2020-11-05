import React, { Component } from 'react'
import store from './store'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)
    const action = getInitList()
    store.dispatch(action)
  }

  handleChange = (e) => {
    let value = e.target.value
    const action = getInputChangeAction(value)
    store.dispatch(action)
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleBtnClick = () => {
    if (this.state.inputValue) {
      const action = getAddItemAction()
      store.dispatch(action)
    }
  }

  handleItemDelete = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(() => store.getState())
  }
}

export default TodoList
