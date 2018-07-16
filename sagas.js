import { all } from 'redux-saga/effects';
import { loadStudentsSagas } from './src/containers/movies/sagas';

export default function* rootSaga() {
    yield all([
        loadStudentsSagas(),
    ])
}
