import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  // 使用 Redux 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
