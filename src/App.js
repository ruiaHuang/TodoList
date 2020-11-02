import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          onEntered={(el) => {
            el.style.color = 'blue'
          }}
          appear={true}>
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  componentDidMount() {}

  handleToggle() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
}

export default App
