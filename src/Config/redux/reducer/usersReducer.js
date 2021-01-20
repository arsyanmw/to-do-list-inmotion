const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    if(action.type === 'GET_USERS') {
        return {
            ...state,
            users: action.payload
        }
    }

    return state;
}

export default usersReducer;
