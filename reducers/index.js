import { combineReducers } from 'redux'
import progressReducer from './progressReducer'
import communityReducer from './communityReducer'

export default combineReducers({progress: progressReducer, 
    community: communityReducer})