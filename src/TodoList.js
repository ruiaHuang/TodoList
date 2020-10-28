import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleBtnClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue],
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list,
    })
    // console.log('TodoList -> handleDeleteLi -> index', index)
    // this.setState({})
  }
}

// function TodoList() {
//   return (
//     <>
//       <div>
//         <input />
//         <button>提交</button>
//       </div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </>
//   )
// }

export default TodoList
