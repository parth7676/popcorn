import { SAVE_NOWPLAYING_MOVIES } from './constants';
import { fromJS } from 'immutable';
import update from 'immutability-helper';

const initialState = fromJS({
    nowPlayingMovies: [],
    totalPages: 0
});

function nowPlayingReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOWPLAYING_MOVIES:
            let movies = state.get('nowPlayingMovies').toJS();
            movies.push(...action.payload.data.results);
            return state.set('nowPlayingMovies', fromJS(movies))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default nowPlayingReducer;