import actions from './actions'

const initialState = {
  loading: false,
  savings_balance: 0
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
