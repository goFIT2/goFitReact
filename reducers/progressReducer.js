import { ADD_SET } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = { 
    exercises: [
        { 
            index: 0,
            exercise: 'Barbell Bench Press', 
            data: [
                {num: 5, reps: 3}, {num: 2, reps: 4}
            ]
        },
        {
            index: 1, 
            exercise: 'Chin Ups',
            data: [
                {num: 5, reps: 12}, {num: 23, reps: 1}
            ]
        }
    ]
}



const progressReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_SET:
            const { exercise, newSet } = action 
            const newState = _.map(state, (item) => {
                if (item.index === exercise.index){
                    item.data.push(newSet)
                }
                return item
            })
            return newState
       default:
            return state
    }
  }
  
  export default progressReducer