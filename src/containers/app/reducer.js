import { fromJS } from 'immutable';
import { SAVE_API_CONFIG } from './constants';

const initialState = fromJS({
    apiConfig: {}
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_API_CONFIG:
            return state.set('apiConfig', fromJS(action.payload.data));
        default:
            return state;
    }
}

export default appReducer;
