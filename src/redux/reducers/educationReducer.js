import intialState from "../intialState.json";
import * as actionTasks from  "../actionTypes";
export default function educationReducer(state=intialState.educationSection,action){
    switch(action.type){
        case actionTasks.ADD_EDUCATION:
            return action.payload
       case actionTasks.ADD_EDUCATION:
           return{...action.payload}
        default:
            return state;
    }
}