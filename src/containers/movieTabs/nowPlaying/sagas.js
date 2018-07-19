import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_NOWPLAYING_MOVIES } from './constants';
import { saveNowPlayingMovies } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadNowPlayingSagas() {
    yield takeEvery(LOAD_NOWPLAYING_MOVIES, loadNowPlayingAsync);
}

export function* loadNowPlayingAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/now_playing?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveNowPlayingMovies(response.data));
    }
}
