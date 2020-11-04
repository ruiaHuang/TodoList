import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import './mock'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
)
