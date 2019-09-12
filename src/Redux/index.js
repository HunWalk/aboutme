import { combineReducers } from 'redux'
import configureStore from './CreateStore'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    article: require('./ArticleRedux').reducer,
})

export default () => {
  let { store } = configureStore(reducers)
  return store
}