import axios from 'axios'

export default axios.create({
  baseURL: 'https://demo.assisttrip.com.br/api/',
  responseType: 'json'
})
