import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { ArticleTypes } from '../Redux/ArticleRedux'

/* ------------- Sagas ------------- */

import { getArticles } from './ArticleSagas'

/* ------------- API ------------- */

const api = API.create()

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(ArticleTypes.ARTICLE_REQUEST, getArticles, api),

    // some sagas only receive an action
  ])
}