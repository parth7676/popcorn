import { fromJS } from 'immutable';

const initialState = fromJS({
    signupPage: [],
});

function signupReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default signupReducer;
