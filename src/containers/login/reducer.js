import { fromJS } from 'immutable';

const initialState = fromJS({
    loginPage: [],
});

function LoginPageReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default LoginPageReducer;
