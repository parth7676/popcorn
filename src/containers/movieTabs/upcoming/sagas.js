import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_UPCOMING_MOVIES } from './constants';
import { saveUpcomingMovies } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadUpcomingSagas() {
    yield takeEvery(LOAD_UPCOMING_MOVIES, loadUpcomingAsync);
}

export function* loadUpcomingAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/upcoming?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveUpcomingMovies(response.data));
    }
}
