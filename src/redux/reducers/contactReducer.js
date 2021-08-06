import intialState from "../intialState.json";
import * as actionTasks from  "../actionTypes";
export default function  contactReducer(state=intialState.contactSection,action){
    switch(action.type){
        case actionTasks.ADD_CONTACT:
            return action.payload
      case actionTasks.UPDATE_CONTACT:
          return {...action.payload}
          default :
          return state;
    }

}