import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'http://localhost:3003'
})

export default apiDevBurger
