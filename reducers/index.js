import { compose, createStore, combineReducers, 
    applyMiddleware, } from 'redux'

import communityReducer from './communityReducer'
import newReducer from './newReducer'
import logger from 'redux-logger'

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBau_IQa_QOEVSeGyghOBqOn7S35m47CeA",
    authDomain: "gofit-33d52.firebaseapp.com",
    databaseURL: "https://gofit-33d52.firebaseio.com",
    projectId: "gofit-33d52",
    storageBucket: "gofit-33d52.appspot.com",
    messagingSenderId: "408243174404"
  };
  
firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    community: communityReducer, newReducer})


export const store = createStore(rootReducer, applyMiddleware(logger))