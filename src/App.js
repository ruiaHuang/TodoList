import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  componentDidMount() {
    // axios.get('/get').then((data) => {
    //   console.log('data', data)
    // })
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }
}

export default App
