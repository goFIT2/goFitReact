import { ADD_SET, ADD_ACTIVITY } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = {
    users: {
        'cvaladez': {
            sessions : {
                'TIMESTAMP1': {
                    '0': {
                        exerciseName: 'Barbell Press',
                        sets: [
                            {
                                num: 5,
                                reps: 3
                            },
                            {
                                num: 2,
                                reps: 4
                            }
                        ]
                    },
                    '1': {
                        exerciseName: 'Chin Ups',
                        sets: [
                            {
                                num: 53,
                                reps: 23
                            },
                            {
                                num: 26,
                                reps: 24
                            }
                        ]
                    },    
                },
            }
        }
    }
}


const progressReducer = (state = defaultState, action) => {
switch (action.type) {
   case ADD_SET:
        console.log("Case Addset")
        const { index } = action
        console.log(index)
        const newSet = {num: 0, reps: 0}

        return state
   case ADD_ACTIVITY:

        return state
   default:
        return state
}
}

export default progressReducer
