import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import adsReducer from './reducers/adsReducer'

export default combineReducers({
  ads: adsReducer,
  form: formReducer
})