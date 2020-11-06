import { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button>提交</button>
        </div>
        <ul>
          <li>Ray</li>
        </ul>
      </div>
    )
  }
  handleInputChange(e) {
    let value = e.target.value
    console.log('TodoList -> handleInputChange -> value', value)
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
