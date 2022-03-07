import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import * as firebase from 'services/firebase'
import * as jwt from 'services/jwt'
import actions from './actions'

const mapAuthProviders = {
  firebase: {
    login: firebase.login,
    register: firebase.register,
    currentAccount: firebase.currentAccount,
    logout: firebase.logout,
  },
  jwt: {
    login: jwt.login,
    register: jwt.register,
    currentAccount: jwt.currentAccount,
    logout: jwt.logout,
    placeholderData: jwt.getJsonPlaceholderData
  },
}

export function* LOGIN({ payload }) {
  const { email, password } = payload
  console.log(email)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const { authProvider: autProviderName } = yield select(state => state.settings)
  const success = yield call(mapAuthProviders[autProviderName].login, email, password)
  // console.log(success)
  if (success) {
    // yield put({
    //   type: 'user/LOAD_CURRENT_ACCOUNT',
    // })
    localStorage.setItem("data", JSON.stringify(success.data));
    yield history.push('/')
    yield put({
      type: 'user/SET_STATE',
      payload: {
        authorized: true,
      },
    })
    notification.success({
      message: 'Logged In',
      description: success.message,
    })
  }
  if (!success) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.success({
      message: 'Logged In error occur',
      description: success.message,
    })
  }
}

// export function* REGISTER({ payload }) {
//   const { email, password, name } = payload
//   yield put({
//     type: 'user/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   })
//   const { authProvider } = yield select(state => state.settings)
//   const success = yield call(mapAuthProviders[authProvider].register, email, password, name)
//   if (success) {
//     yield put({
//       type: 'user/LOAD_CURRENT_ACCOUNT',
//     })
//     yield history.push('/')
//     notification.success({
//       message: 'Succesful Registered',
//       description: 'You have successfully registered!',
//     })
//   }
//   if (!success) {
//     yield put({
//       type: 'user/SET_STATE',
//       payload: {
//         loading: false,
//       },
//     })
//   }
// }

// export function* LOAD_CURRENT_ACCOUNT() {
//   yield put({
//     type: 'user/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   })
//   const { authProvider } = yield select(state => state.settings)
//   const response = yield call(mapAuthProviders[authProvider].currentAccount)
//   if (response) {
//     const { id, email, name, avatar, role } = response
//     yield put({
//       type: 'user/SET_STATE',
//       payload: {
//         id,
//         name,
//         email,
//         avatar,
//         role,
//         authorized: true,
//       },
//     })
//   }
//   yield put({
//     type: 'user/SET_STATE',
//     payload: {
//       loading: false,
//     },
//   })
// }

export function* LOGOUT() {
  const { authProvider } = yield select(state => state.settings)
  yield call(mapAuthProviders[authProvider].logout)
  yield history.push('/auth/login')
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}





// test saga >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.........
export function* PLACEHOLDER_DATA({id}) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      dataLoading: true,
    }
  });
  const success = yield call(mapAuthProviders.jwt.placeholderData, id );
  if(success.status){
    yield put({
      type: 'user/SET_STATE',
      payload: {
        dataLoading: false,
        placeholderData: success.data
      },
    });
  }else{
    yield put({
      type: 'user/SET_STATE',
      payload: {
        dataLoading: false,
      },
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.PLACEHOLDER_DATA, PLACEHOLDER_DATA),
    // takeEvery(actions.REGISTER, REGISTER),
    // takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    // LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
