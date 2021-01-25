export default {
    // Functions return fixtures
    getArticles: () => {
      return {
        ok: true,
        data: require('../Fixtures/articles.json')
      }
    },
  }