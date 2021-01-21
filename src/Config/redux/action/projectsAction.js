import Axios from 'axios';

export const getDataProjects = () => (dispatch) => {
    Axios.get('https://demo3756886.mockable.io/getProjecs')
        .then(result => {
            const responseAPI = result.data;

            dispatch({type: 'GET_PROJECTS', payload: responseAPI});
        })
        .catch(err => console.log('error', err));
}
