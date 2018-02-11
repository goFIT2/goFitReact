import { ADD_SET, POST_STATUS, SWITCH_COMMUNITY } from './ActionConstants'

const addSet = (newSet) => {
    return {
      type: ADD_SET,
      newSet
    }
  }

const postStatus = (friend, text, community) => {
  return {
    type: POST_STATUS,
    friend,
    text,
    community
  }
}

const switchCommunity = (index) => {
  return {
    type: SWITCH_COMMUNITY,
    index
  }
}

export {addSet, postStatus, switchCommunity}
