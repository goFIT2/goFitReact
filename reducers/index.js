import { compose, createStore, combineReducers, 
    applyMiddleware, } from 'redux'
import communityReducer from './communityReducer'
import newReducer from './newReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga  } from '../actions/sagas'
import thunk from 'redux-thunk';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    community: communityReducer, newReducer})

export const store = createStore(rootReducer, 
    applyMiddleware(thunk, logger))

//sagaMiddleware.run(rootSaga)
