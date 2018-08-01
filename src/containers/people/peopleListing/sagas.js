import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_PEOPLE } from './constants';
import { savePeople } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadPeopleSagas() {
    yield takeEvery(LOAD_PEOPLE, loadPeopleAsync);
}

function* loadPeopleAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}person/popular?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(savePeople(response.data));
    }
}
