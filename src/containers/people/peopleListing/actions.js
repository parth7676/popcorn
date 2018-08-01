import { LOAD_PEOPLE, SAVE_PEOPLE } from './constants';

export function loadPeople(apiKey, pageIndex) {
    return {
        type: LOAD_PEOPLE,
        payload: {
            apiKey,
            pageIndex
        }
    }
}

export function savePeople(people) {
    return {
        type: SAVE_PEOPLE,
        payload: {
            people
        }
    }
}