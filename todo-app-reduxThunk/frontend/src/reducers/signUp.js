const initialState = {
    user: {}
};

const signUp = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {
                user: {...action.payload}
            };  
        default:
            return state;
    }
}

export default signUp;