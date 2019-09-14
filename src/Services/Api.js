import apisauce from 'apisauce'
import Reactotron from '../Config/Reactotron'

const create = (baseURL = 'http://localhost:8080/api/v1/article') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      // 'Cache-Control': 'no-cache',
      // 'Accept': 'application/json'
    },
    timeout: 10000
  })

  api.addMonitor(Reactotron.apisauce)

  const getArticles = () => api.get('/index')

  return {
    getArticles
  }
}

export default {
  create
}