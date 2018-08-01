import { SAVE_PEOPLE } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    people: [],
    totalPages: 0
});

function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PEOPLE:
            console.log(action)
            let people = state.get('people').toJS();
            people.push(...action.payload.people.results);
            return state.set('people', fromJS(people))
                .set('totalPages', action.payload.people.total_pages);
        default:
            return state;
    }
}

export default peopleReducer;