import { all } from 'redux-saga/effects'
import menu from './menu/sagas'
import settings from './settings/sagas'
import user from './user/sagas'
import data from './data/sagas'

export default function* rootSaga() {
  yield all([menu(), user(), settings(), data()])
}
