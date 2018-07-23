import { SAVE_MOVIE_DETAILS, SAVE_MOVIE_EXTERNAL_IDS, SAVE_MOVIE_CAST } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    movieDetails: {},
    externalIds: {},
    movieCast: []
});

function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_MOVIE_DETAILS:
            return state.set('movieDetails', fromJS(action.payload.data));
        case SAVE_MOVIE_EXTERNAL_IDS:
            return state.set('externalIds', fromJS(action.payload.data));
        case SAVE_MOVIE_CAST:
            return state.set('movieCast', fromJS(action.payload.data.cast));
        default:
            return state;
    }
}

export default movieDetailsReducer;