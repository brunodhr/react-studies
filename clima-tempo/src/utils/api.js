import axios from 'axios'

export default axios.create({
  baseURL: 'https://apiadvisor.climatempo.com.br/api/v1'
})
