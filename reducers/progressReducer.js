import { ADD_SET } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = { 
    exercises: [
        { 
            index: 0,
            exercise: 'Barbell Bench Press', 
            data: [
                {
                data: [
                    {num: 5, reps: 3}, {num: 2, reps: 4}
                ],
                }
            ],
        },
        {
            index: 1, 
            exercise: 'Chin Ups',
            data: [
                {
                data: [
                    {num: 5, reps: 12}, {num: 23, reps: 1}
                ]
                }
            ]
        }
    ]
}

const progressReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_SET:
            const { index } = action 
            const newSet = {num: 0, reps: 0}
            const newState = _.map(state, (item) => {
                if (index === item.index){
                    const newData = _.concat(item, newSet)
                    return newData
                }
                else {
                    return item
                }
                
            })
            return newState
       default:
            return state
    }
  }
  
  export default progressReducer