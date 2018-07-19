import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TOPRATED_MOVIES } from './constants';
import { saveTopRatedMovies } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadTopRatedSagas() {
    yield takeEvery(LOAD_TOPRATED_MOVIES, loadTopRatedAsync);
}

export function* loadTopRatedAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/top_rated?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveTopRatedMovies(response.data));
    }
}
