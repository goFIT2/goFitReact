import { SAVE_SESSION } from './ActionConstants'
import FirebaseAPI from './Api'
import { takeEvery, takeLatest, call, put } from "redux-saga/effects"


/*
Starts saveSession on each dispatched `SAVE_SESSION` action.
Allows concurrency, in case a user clicks save multiple times.
*/
export function* saveSession() {
    yield takeEvery(SAVE_SESSION, postToFirebase);
}

// worker Saga: will be fired on SAVE_SESSION actions
// Can grab any payload data as needed from action 
function* postToFirebase(action) {
    try {
        const {sessionTime, exercises} = action 
        //Call API function with these args 
        console.log(exercises)
       const apiCall = yield call(FirebaseAPI.saveSessionToFirebase, 'cvaladez', sessionTime, exercises);

       //Dispatches this action to reducer store 
       //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        console.log(`Error: ${e.message}`)
       //yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
  }
  

  