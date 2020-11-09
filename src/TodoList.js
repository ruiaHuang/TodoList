import { connect } from 'react-redux'

//  UI组件
const TodoList = (props) => {
  const { inputValue, handleInputChange, handleClick, list, handleDelete } = props

  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item} onClick={() => handleDelete(index)}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      let value = e.target.value
      const action = {
        type: 'change_input_value',
        value
      }
      dispatch(action)
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },

    handleKeyUp() {},

    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
