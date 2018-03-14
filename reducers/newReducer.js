import {ADD_SET, ADD_ACTIVITY, LBS_INPUT_CHANGE, REPS_INPUT_CHANGE,
        ADD_EXERCISE, ADD_SESSION, SWITCH_EXERCISE} from '../actions/ActionConstants'
import {_} from 'lodash'

const NO_SESSION = 'NO_SESSION'

const defaultState = {
    "currentSession": "NO_SESSION",
    "units": {
        "Barbell Curl": ['lbs', 'reps'],
        "Barbell Press": ['lbs', 'reps'],
        "Bicep Curl": ['lbs', 'reps'],
        "Biking": ['mi', 'mins'],
        "Chin Ups": ['reps'],
        "Crunches": ['reps'],
        "Deadlifts": ['lbs', 'reps'],
        "Dumbbell Press": ['lbs', 'reps'],
        "Jump Rope": ['reps'],
        "Lunges": ['reps'],
        "Pull Ups": ['reps'],
        "Push Ups": ['reps'],
        "Running": ['mi', 'mins'],
        "Shoulder Press": ['lbs', 'reps'],
        "Squats": ['lbs', 'reps'],
        "Swimming": ['mi', 'mins'],
        "Walking": ['mi', 'mins'],
    },
    "userData": 'NOT_LOADED'
 }

const newReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SET: {
            const {exerciseIndex, setIndex, timestamp} = action
            const newSet = {
                lbs: '',
                reps: ''
            }
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions[timestamp][exerciseIndex].sets[setIndex] = newSet
            return newState
        }

        case LBS_INPUT_CHANGE: {
            const {exerciseIndex, setIndex, nextLbs, timestamp} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions[timestamp][exerciseIndex].sets[setIndex].lbs = nextLbs
            return newState
        }

        case REPS_INPUT_CHANGE: {
            const {exerciseIndex, setIndex, nextReps, timestamp} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions[timestamp][exerciseIndex].sets[setIndex].reps = nextReps
            return newState
        }

        case ADD_EXERCISE: {
            const {exerciseName, timestamp} = action
            let newState = _.cloneDeep(state)
            const newExercise = {
                exerciseName,
                sets: {
                    '0': {
                        lbs: '',
                        reps: ''
                    }
                }
            }
            console.log(timestamp)
            // CRASHING, BECAUSE TIMESTAMP IS NOT IN STORE.
            const exerciseIndex = Object.keys(state.users.cvaladez.sessions[timestamp]).length
            console.log(`exerviseIndex:${exerciseIndex}`)
            newState.users.cvaladez.sessions[timestamp][exerciseIndex] = newExercise
            return newState
        }

        case 'ADD_SESSION': {
            const {timestamp} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions[timestamp] = {}
            newState.currentSession = timestamp

            return newState
        }

        case SWITCH_EXERCISE: {
            const {name} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.chosenExercise = name
            return newState
        }

        case 'FETCH_SUCCEEDED': {
            const {result} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions = result.sessions
            return newState
        }
        case 'TIMESTAMP_CHANGED': {
            console.log("tIME changed")
            return state
        }

        case 'INITIAL_LOAD': {
            const {snapshot} = action
            let newState = _.cloneDeep(state)
            newState.users = snapshot
            newState.currentSession = new Date(Date.now()).toDateString()
            console.log(snapshot)
            return newState
        }
        case 'SAVE_SESSION': {
            return state
        }
        default:
            return state
    }
}

export default newReducer
