import { SAVE_ONTHEAIR_TVSHOWS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    onTheAirTVShows: [],
    totalPages: 0
});

function onTheAirTVShowsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_ONTHEAIR_TVSHOWS:
            let tvShows = state.get('onTheAirTVShows').toJS();
            tvShows.push(...action.payload.data.results);
            return state.set('onTheAirTVShows', fromJS(tvShows))
                .set('totalPages', action.payload.data.total_pages);
        default:
            return state;
    }
}

export default onTheAirTVShowsReducer;