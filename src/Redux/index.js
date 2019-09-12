import { combineReducers } from 'redux'

import configureStore from './CreateStore'
import rootSaga from '../Sagas'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    article: require('./ArticleRedux').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)
  return store
}