import axios from 'axios'

const axiosConfig = {
  headers: {
    accept: 'application/json',
    authorization: 'Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV'
  }
}

export default axios.create({
  baseURL: 'https://demo.assisttrip.com.br/api/',
  responseType: 'json',
  headers: axiosConfig.headers
})
