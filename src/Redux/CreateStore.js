import { createStore, applyMiddleware, compose } from 'redux'

import Reactotron from '../Config/Reactotron'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers, Reactotron.createEnhancer()))

  return {
    store
  }
}