import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              // 如果key 为item 默认就只会渲染一个 因为item是固定字符串
              <CSSTransition
                key={index}
                timeout={1000}
                classNames='fade'
                onEntered={(el) => {
                  el.style.color = 'blue'
                }}
                appear={true}>
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>ADD</button>
      </Fragment>
    )
  }

  componentDidMount() {}

  handleAddItem() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
}

export default App
