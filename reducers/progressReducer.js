import { ADD_SET } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = [
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

const progressReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_SET:
            //console.log("Case Addset")
            const { index } = action
            const newSet = {num: 0, reps: 0}
            const newState = _.map(state, (item) => {
                //console.log("item:")
                //console.log(item)
                if (item.index === index){
                    item.data[0].data.push(newSet)
                    return item
                }
                else {
                    return item
                }

            })
            return newState
       case ADD_ACTIVITY:
            console.log("Case Add Activity")
            const {name} = action
            const newActivity = {index: 2, exercise: {name}, data: []}
            const newState = _.map(state, (item) => {

            }
       default:
            return state
    }
  }

  export default progressReducer
