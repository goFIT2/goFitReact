import * as firebase from 'firebase'

class FirebaseAPI { 
    constructor(){
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
    }

    saveSessionToFirebase(userId, sessionTime, exercises) {
        //Use brackets for ES6 computed property names
        firebase.database().ref('users/' + userId).update({
            sessions: {
                [sessionTime]: exercises
            }   
        });
    }

    fetchProgress(userId) {
        // Attach an asynchronous callback to read the data 
        console.log('ABOUT TO CALL FIREBASE')
        return new Promise ((resolve, reject) => {
            firebase.database().ref('users/' + userId)
            .on('value', (snapshot) => {
                resolve(snapshot.val())
            }, (errorObject) => {
                reject(errorObject.code)
            })
        })
    }

}

export default new FirebaseAPI() 