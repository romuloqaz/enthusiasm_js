import api from '../services/api';

export const signUp = (username, name, password, cb) => {
    if (!cb) cb = () => {};
    return (dispatch) => {
        api.post('/users', {
            username, name, password,
        }).then(({data}) => {
            dispatch({
                type: 'SIGNUP',
                payload: {
                    id: data.id,
                    username: data.username,
                    name: data.name,
                    password: data.password

                }
            });
            cb();
        }).catch(err => cb(null, err?.response?.data?.error || err));
    }
}
