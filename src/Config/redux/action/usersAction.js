import Axios from 'axios';

export const getUsers = () => (dispatch) => {
    Axios.get('https://demo3756886.mockable.io/users')
        .then(result => {
            const responseAPI = result.data;

            dispatch({type: 'GET_USERS', payload: responseAPI});
        })
        .catch(err => console.log('error', err));
}
