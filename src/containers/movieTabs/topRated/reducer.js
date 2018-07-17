import { } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    topRated: []
});

function topRatedReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default topRatedReducer;