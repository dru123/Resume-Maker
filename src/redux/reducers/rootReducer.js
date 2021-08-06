// import { combineReducers } from "redux";
// import docuemntReducer from "./documentReducer";
// import contactReducer from "./contactReducer";
// import educationReducer from "./educationReducer";
// const rootReducer=combineReducers({
//     document:docuemntReducer,
//     contact: contactReducer,
//     education:educationReducer
// })
// export default rootReducer;


import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
export default rootReducer;