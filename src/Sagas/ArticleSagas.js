import { call, put } from 'redux-saga/effects'

import ArticleActions from '../Redux/ArticleRedux'

export function * getArticles (api) {

  // make the call to the api
  const response = yield call(api.getArticles)

  if (response.ok) {
    const data = response.data
    // do data conversion here if needed
    yield put(ArticleActions.articleSuccess(data))
  } else {
    yield put(ArticleActions.articleFailure())
  }
}