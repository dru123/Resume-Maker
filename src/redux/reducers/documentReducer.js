import * as actionTasks from  "../actionTypes";
 import intialState from "../intialState.json";
  export default function docuemntReducer(state=intialState.document,action){
      switch(action.type){
          case actionTasks.SET_SKIN:
              return action.payload
         case actionTasks.UPDATE_SKIN:
             return {
                 id:state.id,
                 skinCd:action.payload
             }
        default:
            return state;
      }
  }