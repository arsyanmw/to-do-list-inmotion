import Axios from 'axios';

export const getUsersProjects = () => (dispatch) => {
    Axios.get('https://demo3756886.mockable.io/users')
        .then(result => {
            // console.log('data user', result.data);
            const responseAPI = result.data;

            dispatch({type: 'GET_USERS', payload: responseAPI});
        })
        .catch(err => console.log('error', err));
}
