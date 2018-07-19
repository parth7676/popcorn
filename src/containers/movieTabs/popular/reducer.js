import { SAVE_POPULAR_MOVIES } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    popularMovies: [],
    totalPages: 0
});

function popularReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_POPULAR_MOVIES:
            let movies = state.get('popularMovies').toJS();
            movies.push(...action.payload.data.results);
            return state.set('popularMovies', fromJS(movies))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default popularReducer;