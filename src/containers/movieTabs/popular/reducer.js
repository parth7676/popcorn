import { } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    popular: []
});

function popularReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default popularReducer;