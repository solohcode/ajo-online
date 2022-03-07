import apiClient from 'services/axios'
import axios from 'axios';
import store from 'store'
import { getConfig } from 'services/config/config'

export async function login(email, password) {
  return axios({
    method: 'post',
    url: getConfig("adminlogin"),
    data: {
      email,
      password
    }})
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function register(email, password, name) {
  return apiClient
    .post('/auth/register', {
      email,
      password,
      name,
    })
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  return apiClient
    .get('/auth/account')
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}








// test purposse >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export async function getJsonPlaceholderData(id) {
  return apiClient
    .get(`/todos/${id}`)
    .then(response => {
      if (response) {
        return response
      }
      return false
    })
    .catch(err => console.log(err))
}











export async function logout() {
  localStorage.removeItem("data");
    return true
}
