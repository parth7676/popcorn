import { } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    upcoming: []
});

function upcomingReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default upcomingReducer;