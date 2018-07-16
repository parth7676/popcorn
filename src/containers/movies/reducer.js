import { fromJS } from 'immutable';

const initialState = fromJS({
    movies: [],
});

function studentPageReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default studentPageReducer;
