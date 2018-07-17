import { } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    nowPlaying: []
});

function nowPayingReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default nowPayingReducer;