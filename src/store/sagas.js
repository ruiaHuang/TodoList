import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
  try {
    const { data } = yield axios.get('/list')
    const action = initListAction(data)
    yield put(action)
  } catch (e) {
    console.log('list.json 网络请求失败', e)
  }
}

export default mySaga
