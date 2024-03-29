import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
