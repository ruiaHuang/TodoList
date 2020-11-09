const defaultState = {
  inputValue: '',
  list: []
}

const reducer = (state = defaultState, action) => {
  let { type, value, index } = action
  const newState = JSON.parse(JSON.stringify(state))

  if (type === 'change_input_value') {
    newState.inputValue = value
  }
  if (type === 'add_item') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }
  if (type === 'delete_item') {
    newState.list.splice(index, 1)
  }
  return newState
}

export default reducer
