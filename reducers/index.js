import { combineReducers } from 'redux'
import progressReducer from './progressReducer'
import communityReducer from './communityReducer'
import newReducer from './newReducer'

export default combineReducers({progress: progressReducer, 
    community: communityReducer, newReducer})