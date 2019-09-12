import apisauce from 'apisauce'
import Reactotron from '../Config/Reactotron'

const create = (baseURL = 'https://aboutme.cstudios.ninja/api/v1/articles') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  api.addMonitor(Reactotron.apisauce)

  const getArticles = () => api.get('/articles')

  return {
    getArticles
  }
}

export default {
  create
}