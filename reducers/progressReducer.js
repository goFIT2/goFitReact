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
            console.log("Case Addset")
            const { index } = action
            const newSet = {num: 0, reps: 0}
            const newState = _.map(state, (item) => {
                console.log("item:")
                console.log(item)
                if (item.index === index){
                    item.data[0].data.push(newSet)
                    
                    console.log(item.data.data)
                    // let newData = item 
                    // newData.data.data  = _.concat(newData.data.data, newSet)
                    // console.log('newData')

                    // console.log(newData)
                    return item
                }
                else {
                    return item
                }
                
            })
            console.log("newState")
            console.log(newState)
            return newState
       default:
            return state
    }
  }
  
  export default progressReducer