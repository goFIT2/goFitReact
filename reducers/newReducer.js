import {ADD_SET, ADD_ACTIVITY, LBS_INPUT_CHANGE, REPS_INPUT_CHANGE,
        ADD_EXERCISE} from '../actions/ActionConstants'
import {_} from 'lodash'

const defaultState = {
    users: {
        'cvaladez': {
            sessions: {
                'TIMESTAMP1': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {

                        }
                    // },
                    // '1': {
                    //     exerciseName: 'Chin Ups',
                    //     sets: {
                    //         '0': {
                    //             lbs: '53',
                    //             reps: '23'
                    //         },
                    //         '1': {
                    //             lbs: '26',
                    //             reps: '24'
                    //         }
                    //     }
                    }
                },
                'TIMESTAMP0': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {

                        }
                    },
                    '1': {
                        exerciseName: 'Chin Ups',
                        sets: {
                            '0': {
                                lbs: '53',
                                reps: '23'
                            },
                            '1': {
                                lbs: '26',
                                reps: '24'
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
            const {exerciseIndex, setIndex} = action
            const newSet = {
                lbs: '0',
                reps: '0'
            }
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions.TIMESTAMP1[exerciseIndex].sets[setIndex] = newSet
            return newState
        }

        case LBS_INPUT_CHANGE: {
            const {exerciseIndex, setIndex, nextLbs} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions.TIMESTAMP1[exerciseIndex].sets[setIndex].lbs = nextLbs
            return newState
        }

        case REPS_INPUT_CHANGE: {
            const {exerciseIndex, setIndex, nextReps} = action
            let newState = _.cloneDeep(state)
            newState.users.cvaladez.sessions.TIMESTAMP1[exerciseIndex].sets[setIndex].reps = nextReps
            return newState
        }

        case ADD_EXERCISE: {
            const {exerciseName} = action
            let newState = _.cloneDeep(state)
            const newExercise = {
                exerciseName,
                sets: {
                    '0': {
                        lbs: '0',
                        reps: '0'
                    }
                }
            }
            const exerciseIndex = Object.keys(state.users.cvaladez.sessions.TIMESTAMP1).length
            console.log(`exerviseIndex:${exerciseIndex}`)
            newState.users.cvaladez.sessions.TIMESTAMP1[exerciseIndex] = newExercise

            return newState
        }
        default:
            return state
    }
}

export default newReducer
