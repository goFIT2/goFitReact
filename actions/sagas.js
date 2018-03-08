// import { SAVE_SESSION, ADD_SESSION } from './ActionConstants'

// import { takeEvery, takeLatest, call, put, all} from "redux-saga/effects"
// // import * as firebase from 'firebase'

// // // Initialize Firebase
// // const firebaseConfig = {
// //     apiKey: "AIzaSyBau_IQa_QOEVSeGyghOBqOn7S35m47CeA",
// //     authDomain: "gofit-33d52.firebaseapp.com",
// //     databaseURL: "https://gofit-33d52.firebaseio.com",
// //     projectId: "gofit-33d52",
// //     storageBucket: "gofit-33d52.appspot.com",
// //     messagingSenderId: "408243174404"
// // };
// // firebase.initializeApp(firebaseConfig);


// function* watchAddSession() {
//     yield takeEvery('ADD_SESSION', addSession)
// }

// //If session exists already, the sets at that time stamp 
// function* addSession(action){
//     try {  
//         const {timestamp} = action 
//         console.log(`Adding session:${timestamp} to Firebase`)
//         let apiCall = yield call (addSessionFireBase, timestamp)
//     }
//     catch(e) {
//         console.log(`SAGA Error: ${e.message}`)
//     }
// }

// //THIS WON'T WORK FOR WHEN IT'S THE SAME DAY, WE NEED A SCREEN TO 
// //ADD SESSIONS AND SEPARATE THE SESSIONS BY DATE AND TIME
// function addSessionFireBase(timestamp){
//     return new Promise((resolve, reject) => {
//         firebase.database().ref('/').update(
//             timestamp
//         )
//     })
// }

// // function* watchSaveSession() {
// //     yield takeEvery(SAVE_SESSION, postToFirebase);
// // }

// // function* postToFirebase(action) {
// //     try {
// //         const {timestamp, exercises} = action 
// //         //Call API function with these args 
// //         console.log(`Saving Session, timestamp:${timestamp}, exercises:${exercises}`)
// //         let apiCall = yield call(firebase.database.ref('/' + timestamp).set(
// //             exercises
// //             )
// //         )
// //     } catch (e) {
// //         console.log(`SAGA Error: ${e.message}`)
// //     }
// //   }


// // function* addSession(action){ 
// //     try {
// //         const {timestamp} = action
// //         console.log(`Timestamp:${timestamp}`)
// //         const temp = { 
// //             sessions: {
// //                 'Tue Feb 27 2018': 'omg'
// //             }
// //         }
// //         let apiCall = yield call(FirebaseAPI.saveSessionToFirebase, 'cvaladez', timestamp, temp)
// //         yield put ({type: 'FETCH_SUCCEEDED'})
// //     }
// //     catch(e){
// //         console.log(`SAGA Error: ${e.message}`)
// //     }
// // }



// function* watchFetchData() {
//     yield takeEvery('FETCH_DATA', fetchFromFirebase)
// }

// function* fetchFromFirebase(action) {
//     try {
//         //let result = yield call(FirebaseAPI.fetchProgress, 'cvaladez')
//         //yield put ({type: 'FETCH_SUCCEEDED', result})
//     }
//     catch(e) {
//         console.log(`SAGA Error: ${e.message}`)
//     }
// }


// firebase.database().ref('/').on('value', snap => {
    
// })

// // ref.on('value', function(dataSnapshot) {
// //     ...
// //   });


// export function* rootSaga() {
//     yield all([
//       watchAddSession(),
//      // watchSaveSession(),
//      // watchFetchData()
//     ])
//   }