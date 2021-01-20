const initialState = {
    projectsThumb: []
}

const projectsReducer = (state = initialState, action) => {
    if(action.type === 'GET_PROJECTS') {
        return {
            ...state,
            projectsThumb: action.payload
        }
    }

    return state;
}

export default projectsReducer;
