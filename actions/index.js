import { ADD_SET, LBS_INPUT_CHANGE, ROW_INPUT_CHANGE, ADD_EXERCISE,
  CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE, REPS_INPUT_CHANGE, SAVE_WORKOUT } from './ActionConstants'

export const saveWorkout = () => {
  return {
    type: SAVE_WORKOUT
  }
}

export const lbsInputChange = (exerciseIndex, setIndex, nextLbs) => {
  return {
    type: LBS_INPUT_CHANGE,
    exerciseIndex, setIndex, nextLbs
  }
}

export const repsInputChange = (exerciseIndex, setIndex, nextReps) => {
  return {
    type: REPS_INPUT_CHANGE, 
    exerciseIndex, setIndex, nextReps
  }
}

export const addSet = (exerciseIndex, setIndex) => {
  return {
    type: ADD_SET,
    exerciseIndex, setIndex
  }
}

export const addExercise = (exerciseName) => {
    console.log("ADD EXERISE CALLED")
    console.log(exerciseName)
    return {
      type: ADD_EXERCISE,
      exerciseName
    }
  }

  export const addActivity = (name) => {
    return {
      type: ADD_ACTIVITY,
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

