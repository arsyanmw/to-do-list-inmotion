import Axios from 'axios';

export const getTodo = () => (dispatch) => {
    Axios.get('https://demo3756886.mockable.io/todolist')
        .then(result => {
            const responseAPI = result.data;

            dispatch({type: 'GET_TODO', payload: responseAPI});
        })
        .catch(err => console.log('error', err));
}
