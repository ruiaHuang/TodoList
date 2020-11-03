const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

// reducer 可以接受state，但是绝不能修改state
const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'CHANGE_INPUT_VALUE') {
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'ADD_TODO_ITEM') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}

export default reducer
