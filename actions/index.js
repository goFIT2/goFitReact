import { ADD_SET, LBS_INPUT_CHANGE, ROW_INPUT_CHANGE, ADD_EXERCISE, ADD_SESSION, SWITCH_EXERCISE,
  CREATE_COMMUNITY, POST_STATUS, SWITCH_COMMUNITY, LIKE_UNLIKE, REPS_INPUT_CHANGE,
  SAVE_SESSION } from './ActionConstants'

import ReduxThunk from 'redux-thunk' 

import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBau_IQa_QOEVSeGyghOBqOn7S35m47CeA",
    authDomain: "gofit-33d52.firebaseapp.com",
    databaseURL: "https://gofit-33d52.firebaseio.com",
    projectId: "gofit-33d52",
    storageBucket: "gofit-33d52.appspot.com",
    messagingSenderId: "408243174404"
};
firebase.initializeApp(firebaseConfig);

  export const addSession = (timestamp) => {
    return {
      type: 'ADD_SESSION', timestamp
    }
  }

  export const saveSession = (timestamp, exercises) => {
    console.log(`saving session:${timestamp}`)
    console.log(exercises)
    console.log('1')
    return (dispatch) => { 
      console.log('2')
      return firebase.database().ref('/users/cvaladez/sessions/' + timestamp).update(
        exercises
      ).then(
        dispatch(syncFirebase())
      )
    } 
  }

  const timestampRef = firebase.database().ref('/random');
  
  const syncFirebase = () => {
    return (dispatch) => {
      timestampRef.on('value', function(snapshot) {
        console.log(`Timestamp value changed to:${snapshot.val()}`)
        
          console.log(dispatch)
          dispatch({type: 'TIMESTAMP_CHANGED'})
        })
    };
  }

  const usersRef = firebase.database().ref('/users')
  const communityRef = firebase.database().ref('/communities')
  const newsfeedRef = firebase.database().ref('/newsfeed')
  
  export const initialLoad = () => {
    return dispatch => {
      usersRef.once('value')
        .then((snapshot) => {
          dispatch({type: 'LOAD_PROGRESS', snapshot: snapshot.val()})
        })
      communityRef.once('value')
        .then((snapshot) => {
          dispatch({type: 'LOAD_COMMUNITIES', snapshot: snapshot.val()})
        })
      newsfeedRef.once('value')
      .then((snapshot) => {
        dispatch({type: 'LOAD_NEWSFEED', snapshot: snapshot.val()})
      })
    }
  }


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
    return {
      type: ADD_EXERCISE,
      exerciseName, timestamp
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
