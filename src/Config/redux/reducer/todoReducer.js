const initialState = {
    todo: []
}

const todoReducer = (state = initialState, action) => {
    if(action.type === 'GET_TODO') {
        return {
            ...state,
            todo: action.payload
        }
    }

    return state;
}

export default todoReducer;
