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
        console.log(`API with params| userId:${userId}, \
        sessionTime:${sessionTime}, exercises:${exercises}`)

        console.log(firebase.database().ref())

        //Use brackets for ES6 computed property names
        firebase.database().ref('users/' + userId).set({
            sessions: {
                [sessionTime]: exercises
            }   
        });
        console.log("done")
    }
}

export default new FirebaseAPI() 