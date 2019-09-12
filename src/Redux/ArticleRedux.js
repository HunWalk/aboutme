import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  articleRequest: null,
  articleSuccess: ['data'],
  articleFailure: null
})

export const ArticleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  payload: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const ArticleSelectors = {
  selectArticles: state => state.payload
}

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ fetching: true })

export const success = (state, {payload}) => {
  return state.merge({ fetching: false, error: null, payload })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ARTICLE_REQUEST]: request,
  [Types.ARTICLE_SUCCESS]: success,
  [Types.ARTICLE_FAILURE]: failure
})