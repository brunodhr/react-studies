import axios from 'axios'

const axiosConfig = {
  headers: {
    accept: 'application/json',
    authorization: 'Basic 8b19cc6adeddd4f207dcc2a45fe2688b'
  }
}

export default axios.create({
  baseURL: 'https://demo.assisttrip.com.br/api/',
  responseType: 'json',
  headers: axiosConfig.headers
})
