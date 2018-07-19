import { SAVE_TOPRATED_MOVIES } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    topRatedMovies: [],
    totalPages: 0
});

function topRatedReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOPRATED_MOVIES:
            let movies = state.get('topRatedMovies').toJS();
            movies.push(...action.payload.data.results);
            return state.set('topRatedMovies', fromJS(movies))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default topRatedReducer;