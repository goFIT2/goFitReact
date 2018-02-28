import {ADD_SET, ADD_ACTIVITY, LBS_INPUT_CHANGE, REPS_INPUT_CHANGE} from '../actions/ActionConstants'
import {_} from 'lodash'

const defaultState = {
    users: {
        'cvaladez': {
            sessions: {
                'TIMESTAMP1': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {
                            '0': {
                                lbs: '5',
                                reps: 3
                            },
                            '1': {
                                lbs: '2',
                                reps: '4'
                            }
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
                lbs: 0,
                reps: 0
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

        default:
            return state
    }
}

export default newReducer
