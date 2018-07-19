import { SAVE_UPCOMING_MOVIES } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    upcomingMovies: [],
    totalPages: 0
});

function upcomingReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_UPCOMING_MOVIES:
            let filteredMovies = action.payload.data.results.filter((movie) => new Date(movie.release_date).getDate() >= (new Date().getDate() - 2));
            let movies = state.get('upcomingMovies').toJS();
            movies.push(...filteredMovies);
            return state.set('upcomingMovies', fromJS(movies))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default upcomingReducer;