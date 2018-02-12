import { ADD_SET } from './ActionConstants'

export const addSet = (index) => {
  console.log("ADD SET WAS CALLED")
  console.log(index)
    return {
      type: ADD_SET,
      index
    }
  }


