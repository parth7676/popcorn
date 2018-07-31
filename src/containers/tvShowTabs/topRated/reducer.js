import { SAVE_TOPRATED_TVSHOWS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    topRatedTVShows: [],
    totalPages: 0
});

function topRatedTVShowsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOPRATED_TVSHOWS:
            let tvShows = state.get('topRatedTVShows').toJS();
            tvShows.push(...action.payload.data.results);
            return state.set('topRatedTVShows', fromJS(tvShows))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default topRatedTVShowsReducer;