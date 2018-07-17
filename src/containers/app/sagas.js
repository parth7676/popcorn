import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_API_CONFIG } from './constants';
import { saveAPIConfiguration, loadAPIConfiguration } from './actions';

export function* loadAPIConfigurationSagas() {
    yield takeEvery(LOAD_API_CONFIG, loadAPIConfigurationAsync);
}

export function* loadAPIConfigurationAsync(action) {
    const response = yield call(axios.get, `https://api.themoviedb.org/3/configuration?api_key=${action.payload.data}`);
    if (response.status === 200) {
        yield put(saveAPIConfiguration(response.data));
    }
}
