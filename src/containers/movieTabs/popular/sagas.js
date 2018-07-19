import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_POPULAR_MOVIES } from './constants';
import { savePopularMovies } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadPopularSagas() {
    yield takeEvery(LOAD_POPULAR_MOVIES, loadPopularAsync);
}

export function* loadPopularAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/popular?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(savePopularMovies(response.data));
    }
}
