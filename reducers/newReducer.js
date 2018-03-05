import {ADD_SET, ADD_ACTIVITY, LBS_INPUT_CHANGE, REPS_INPUT_CHANGE,
        ADD_EXERCISE, ADD_SESSION, SWITCH_EXERCISE} from '../actions/ActionConstants'
import {_} from 'lodash'

const defaultState = {
   units: {
     "Barbell Press": ["lbs", "reps"],
     "Dumbbell Press": ["lbs", "reps"],
     "Bicep Curl": ["lbs", "reps"],
     "Barbell Curl": ["lbs", "reps"],
     "Shoulder Press": ["lbs", "reps"],
     "Running" : ["mi", "min"],
     "Swimming" : ["mi", "min"],
     "Chin Ups" : ["reps"],
   },
    users: {
        'cvaladez': {
            chosenExercise: 'Barbell Press',
            sessions: {
                'Tue Feb 27 2018': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {
                            '0': {
                                lbs: '50',
                                reps: '10'
                            },
                        }
                    }
                },
                'Wed Feb 28 2018': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {
                          '0': {
                              lbs: '60',
                              reps: '15'
                          },
                          '1': {
                              lbs: '60',
                              reps: '10'
                          },
                        }
                    },
                    '1': {
                        exerciseName: 'Dumbbell Press',
                        sets: {
                            '0': {
                                lbs: '50',
                                reps: '20'
                            },
                            '1': {
                                lbs: '45',
                                reps: '15'
                            }
                        }
                    }
                }
            }
        }
    }
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
            const exerciseIndex = Object.keys(state.users.cvaladez.sessions[timestamp]).length
            //console.log(`exerviseIndex:${exerciseIndex}`)
            newState.users.cvaladez.sessions[timestamp][exerciseIndex] = newExercise

            return newState
        }

        case ADD_SESSION: {
            const {timestamp} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions[timestamp] = {}
            return newState
        }

        case SWITCH_EXERCISE: {
            const {name} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.chosenExercise = name
            return newState
        }

        default:
            return state
    }
}

export default newReducer
