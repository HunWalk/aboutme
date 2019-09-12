import apisauce from 'apisauce'

const create = (baseURL = 'https://aboutme.cstudios.ninja/api/v1/articles') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getArticles = () => api.get('/articles')

  return {
    getArticles
  }
}

export default {
  create
}