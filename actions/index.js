import { ADD_SET } from './ActionConstants'

export const addSet = (item) => {
  console.log("ADD SET WAS CALLED")
    return {
      type: ADD_SET,
      item
    }
  }


