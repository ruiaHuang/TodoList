import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reducer 可以接受state，但是绝不能修改state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  let type = action.type
  if (type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
  }
  if (type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }
  if (type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1)
  }
  if (type === INIT_LIST_ACTION) {
    newState.list = action.data
  }
  return newState
}

export default reducer
