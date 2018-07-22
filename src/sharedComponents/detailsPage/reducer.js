import { Save_MOVIE_DETAILS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    movieDetails: {}
});

function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case Save_MOVIE_DETAILS:
            return state.set('movieDetails', fromJS(action.payload.data));
        default:
            return state;
    }
}

export default movieDetailsReducer;