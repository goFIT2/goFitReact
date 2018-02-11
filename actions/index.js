import { ADD_SET, CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY } from './ActionConstants'

const addSet = (newSet) => {
    return {
      type: ADD_SET,
      newSet
    }
  }

const createCommunity = (name, members) => {
  return {
    type: CREATE_COMMUNITY,
    name,
    members
  }
}

const postStatus = (friend, text, community, attachment) => {
  return {
    type: POST_STATUS,
    friend,
    text,
    community,
    attachment
  }
}

const switchCommunity = (index) => {
  return {
    type: SWITCH_COMMUNITY,
    index
  }
}

export {addSet, createCommunity, postStatus, switchCommunity}
