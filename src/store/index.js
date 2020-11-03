import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  // 使用Redux插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
