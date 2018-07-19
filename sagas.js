import { all } from 'redux-saga/effects';
import { loadAPIConfigurationSagas } from './src/containers/app/sagas';
import { loadStudentsSagas } from './src/containers/movies/sagas';
import { loadNowPlayingSagas } from './src/containers/movieTabs/nowPlaying/sagas';
import { loadUpcomingSagas } from './src/containers/movieTabs/upcoming/sagas';

export default function* rootSaga() {
    yield all([
        loadAPIConfigurationSagas(),
        loadStudentsSagas(),
        loadNowPlayingSagas(),
        loadUpcomingSagas(),
    ])
}
