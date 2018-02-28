import { ADD_SET, ADD_ACTIVITY } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = {
    users: {
        'cvaladez': {
            sessions : {
                'TIMESTAMP1': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: {
                            '0': {
                                lbs: 5,
                                reps: 3
                            },
                            '1': {
                                lbs: 2,
                                reps: 4
                            }
                        }
                    },
                    '1': {
                        exerciseName: 'Chin Ups',
                        sets: {
                            '0': {
                                lbs: 53,
                                reps: 23
                            },
                            '1': {
                                lbs: 26,
                                reps: 24
                            }
                        }
                    },    
                },
            }
        }
    }
}


const progressReducer = (state = defaultState, action) => {
switch (action.type) {
   case ADD_SET:
        const { exerciseIndex, setIndex } = action
        console.log(exerciseIndex)
        console.log(setIndex)
        const newSet = {lbs: 0, reps: 0}
        let newState = _.cloneDeep(state)
        newState.users.cvaladez.sessions.TIMESTAMP1[exerciseIndex].sets[setIndex] = newSet
        return newState
    
   case ADD_ACTIVITY:

        return state
   default:
        return state
}
}

export default progressReducer
