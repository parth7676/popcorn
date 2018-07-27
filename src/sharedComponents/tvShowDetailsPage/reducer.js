import { SAVE_TVSHOW_CAST, SAVE_TVSHOW_DETAILS, SAVE_TVSHOW_EXTERNAL_IDS, SAVE_TVSHOW_POSTERS } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    tvShowDetails: {},
    externalIds: {},
    tvShowCast: [],
    posters: []
});

function tvShowDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TVSHOW_DETAILS:
            return state.set('tvShowDetails', fromJS(action.payload.data));
        case SAVE_TVSHOW_EXTERNAL_IDS:
            return state.set('externalIds', fromJS(action.payload.data));
        case SAVE_TVSHOW_CAST:
            return state.set('tvShowCast', fromJS(action.payload.data.cast));
        case SAVE_TVSHOW_POSTERS:
            return state.set('posters', fromJS(action.payload.data.posters.slice(0, 5)));
        default:
            return state;
    }
}

export default tvShowDetailsReducer;
