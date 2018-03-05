import { ADD_SET, LBS_INPUT_CHANGE, ROW_INPUT_CHANGE, ADD_EXERCISE, ADD_SESSION, SWITCH_EXERCISE,
  CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE, REPS_INPUT_CHANGE,
  SAVE_SESSION } from './ActionConstants'

  export const lbsInputChange = (exerciseIndex, setIndex, nextLbs, timestamp) => {
    return {
      type: LBS_INPUT_CHANGE,
      exerciseIndex, setIndex, nextLbs, timestamp
    }
  }

  export const repsInputChange = (exerciseIndex, setIndex, nextReps, timestamp) => {
    return {
      type: REPS_INPUT_CHANGE,
      exerciseIndex, setIndex, nextReps, timestamp
    }
  }


  export const addSet = (exerciseIndex, setIndex, timestamp) => {
    return {
      type: ADD_SET,
      exerciseIndex, setIndex, timestamp
    }
  }

  export const addExercise = (exerciseName, timestamp) => {
    //console.log("ADD EXERISE CALLED")
    //console.log(exerciseName)
    return {
      type: ADD_EXERCISE,
      exerciseName, timestamp
    }
  }

  export const addSession = (timestamp) => {
    return {
      type: ADD_SESSION,
      timestamp
    }
  }

  export const addActivity = (name) => {
    return {
      type: ADD_ACTIVITY,
      name
    }
  }

  export const switchExercise = (name) => {
    return {
      type: SWITCH_EXERCISE,
      name
    }
  }

  export  const createCommunity = (name, members) => {
    return {
      type: CREATE_COMMUNITY,
      name,
      members
    }
  }

  export const postStatus = (friend, text, community, attachment) => {
    return {
      type: POST_STATUS,
      friend,
      text,
      community,
      attachment
    }
  }

  export const switchCommunity = (index) => {
    return {
      type: SWITCH_COMMUNITY,
      index
    }
  }

  export const likeUnlike = (postIndex) => {
    return {
      type: LIKE_UNLIKE,
      postIndex
    }
  }
