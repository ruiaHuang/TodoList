import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  let type = action.type
  if (type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
    return newState
  } else if (type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if (type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}

export default reducer
