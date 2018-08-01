import { SAVE_AIRING_TODAY_TVSHOWS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    airingTodayTVShows: [],
    totalPages: 0
});

function airingTodayTVShowsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_AIRING_TODAY_TVSHOWS:
            let tvShows = state.get('airingTodayTVShows').toJS();
            tvShows.push(...action.payload.data.results);
            return state.set('airingTodayTVShows', fromJS(tvShows))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default airingTodayTVShowsReducer;