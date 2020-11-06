import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'
import './mock'
import 'antd/dist/antd.css'

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
