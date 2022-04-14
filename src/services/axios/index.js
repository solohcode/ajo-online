import axios from 'axios'
import store from 'store'
import {
  notification
} from 'antd'

const apiClient = axios.create({
  baseURL: 'http://137.184.148.224/ecommerce_test1/public/api',
})

apiClient.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    request.headers.AccessToken = accessToken
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Error handling
  const {
    response
  } = error
  const {
    data
  } = response
  if (data) {
    notification.warning({
      message: data,
    })
  }
})

export default apiClient
