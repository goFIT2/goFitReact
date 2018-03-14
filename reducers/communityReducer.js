import { CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = {
  chosenCommunity: 0,
  communities: [
    {key: 0, name: '#goFITgang', icon: require('../assets/images/social.png'), members: ['You', 'Bryce', 'Olivia', 'Chris', 'CJ']},
    {key: 1, name: 'Meathead', icon: require('../assets/images/social.png'), members: ['You', 'CJ']}
  ],
  newsfeed: [
    {key:0, friend:'CJ', text:'', community:1, time:1520750520661, likes:[], attachment:'CJ created the Meathead community!'},
    {key:1, friend:'CJ', text:'Hey can you let me know what workouts you did here?', community:1, time:1520750620661, likes:[], attachment:''},
    {key:2, friend:'Bryce', text:'', community:0, time:1520750720661, likes:['Olivia'], attachment:'Bryce created the #goFITgang community with Olivia.'},
    {key:3, friend:'Olivia', text:'Yay time to get fit again!', community:0, time:1520750820661, likes:['Bryce'], attachment: ''},
    {key:4, friend:'Bryce', text:'', community:0, time:1520750920661, likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
    {key:5, friend:'Olivia', text:'', community:0, time:1520850406610, likes:['Bryce'], attachment:'Olivia completed running, rowing today.'},
    {key:6, friend:'Olivia', text:'', community:0, time:1520850506610, likes:['Bryce', 'CJ', 'Chris'], attachment:'Olivia added CJ, Chris to #goFITgang.'},
    {key:7, friend:'Olivia', text:'Hi Chris and CJ!', community:0, time:1520850606610, likes:['CJ', 'Chris'], attachment:''},
    {key:8, friend:'Chris', text:'I\'m excited to work out with you all!', community:0, time:1520850706610, likes:['Bryce', 'Olivia', 'CJ'], attachment:''},
    {key:9, friend:'Bryce', text:'', community:0, time:1520850806610, likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
    {key:10, friend:'CJ', text:'Wow I just benched 5000 pounds. That\'s a new record for me.', community:0, time:1520850906610, likes:['Bryce', 'Olivia', 'Chris'], attachment:'CJ completed bench press today.'},
  ]
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
