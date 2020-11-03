const defaultState = {
  inputValue: '666',
  list: [1, 2, 3]
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  let type = action.type
  if (type === 'CHANGE_INPUT_VALUE') {
    newState.inputValue = action.value
    return newState
  } else if (type === 'ADD_TODO_ITEM') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}

export default reducer
