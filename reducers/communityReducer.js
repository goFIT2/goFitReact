import { CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = {
  "chosenCommunity": 0,
}

const communityReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    //wIP: but creating duplicates in reducer. Okay on Firebase.
    case CREATE_COMMUNITY: {
      const {snapshot, key} = action 
      const {name, members} = snapshot
      newCommunity = {key, name, icon: require('../assets/images/social.png'), members}
      newState.communities = state.communities.slice()
      newState.communities.push(newCommunity)
      return newState
    }
    case SWITCH_COMMUNITY: {
      const {index} = action
      newState.chosenCommunity = index
      return newState
    }
    //Done / WIP: Need to get the ordering wokring 
    case POST_STATUS: {
      const {snapshot} = action
      const {friend, text, community, attachment} = snapshot
      const newRow = {key:state.newsfeed.length, friend, text, community, time:Date.now(), likes:[], attachment}
      newState.newsfeed = state.newsfeed.slice()
      newState.newsfeed.push(newRow)
      return newState
    }

    case LIKE_UNLIKE: {
      const {postIndex} = action
      newState.newsfeed = state.newsfeed.slice()
      if (newState.newsfeed[postIndex].likes.indexOf("You") >= 0) {
        newState.newsfeed[postIndex].likes.splice(newState.newsfeed[postIndex].likes.indexOf("You"), 1)
      } else {
        newState.newsfeed[postIndex].likes.push('You')
      }
      return newState
    }
    case 'LOAD_COMMUNITIES': {
        const {snapshot} = action 
        let newState = _.cloneDeep(state)
        newState.communities = snapshot
        return newState
    }
    case 'LOAD_NEWSFEED': {
      const {snapshot} = action 
      let newState = _.cloneDeep(state)
      newState.newsfeed = snapshot
      return newState
    }
    default:
      return state
  }
}

export default communityReducer
