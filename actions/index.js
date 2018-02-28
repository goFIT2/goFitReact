import { ADD_SET, CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE } from './ActionConstants'


const addSet = (exerciseIndex, setIndex) => {
    return {
      type: ADD_SET,
      exerciseIndex, setIndex
    }
  }

  const addActivity = (name) => {
    return {
      type: ADD_ACTIVITY,
      name
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

const likeUnlike = (postIndex) => {
  return {
    type: LIKE_UNLIKE,
    postIndex
  }
}

export {addSet, createCommunity, postStatus, switchCommunity, addActivity, likeUnlike}
