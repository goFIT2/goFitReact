import { combineReducers } from 'redux'

import communityReducer from './communityReducer'
import newReducer from './newReducer'

export default combineReducers({
    community: communityReducer, newReducer})