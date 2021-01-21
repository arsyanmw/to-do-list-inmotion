import {combineReducers} from 'redux';

// reducer
import projectsReducer from "./projectsReducer";
import usersReducer from "./usersReducer";
import todoReducer from "./todoReducer";

const reducer = combineReducers({projectsReducer, usersReducer, todoReducer});

export default reducer;
