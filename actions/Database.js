import * as firebase from 'firebase'

class FirebaseAPI { 
    constructor(){

    }

    saveSessionToFirebase(userId, sessionTime, exercises) {

        //Use brackets for ES6 computed property names
        const toAdd = { 
            mySessions: {
                [sessionTime]: exercises
            }   
        }   
        // sessionTime: sessionTime
        console.log('logging firebase json')
        console.log(toAdd)
        firebase.database().ref().update(
             toAdd
        );
    }

    fetchProgress(userId) {
        // Attach an asynchronous callback to read the data 
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

