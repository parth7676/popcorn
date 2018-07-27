import { SAVE_POPULAR_TVSHOWS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    popularTVShows: [],
    totalPages: 0
});

function popularTVShowsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_POPULAR_TVSHOWS:
            let tvShows = state.get('popularTVShows').toJS();
            tvShows.push(...action.payload.data.results);
            return state.set('popularTVShows', fromJS(tvShows))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default popularTVShowsReducer;