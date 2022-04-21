import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import * as firebase from 'services/firebase'
import * as jwt from 'services/jwt'
import actions from './actions'

const mapAuthProviders = {
  getBalance: jwt.currentAccount,
}

export function* GET_SAVINGS_BALANCE() {
  yield put({
    type: 'data/SET_STATE',
    payload: {
      loading: true
    }
  })
  const success = yield call(mapAuthProviders.getBalance)
  if(success.status){
    yield put({
      type: 'data/SET_STATE',
      payload: {
        loading: false,
        savings_balance: success.data
      }
    })
  }else{
    yield put({
      type: 'data/SET_STATE',
      payload: {
        loading: false,
      }
    })
  }

}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_SAVINGS_BALANCE, GET_SAVINGS_BALANCE),
  ])
}
