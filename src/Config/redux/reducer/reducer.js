import {combineReducers} from 'redux';

// reducer
import projectsReducer from "./projectsReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({projectsReducer, usersReducer});

export default reducer;
