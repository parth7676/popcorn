import { all } from 'redux-saga/effects';
import { loadAPIConfigurationSagas } from './src/containers/app/sagas';
import { loadNowPlayingSagas } from './src/containers/movieTabs/nowPlaying/sagas';
import { loadUpcomingSagas } from './src/containers/movieTabs/upcoming/sagas';
import { loadTopRatedSagas } from './src/containers/movieTabs/topRated/sagas';
import { loadPopularSagas } from './src/containers/movieTabs/popular/sagas';
import { loadMovieDetailsSagas, loadMovieExternalIdsSagas, loadCastSagas } from './src/sharedComponents/detailsPage/sagas';

import { loadPopularTVShowsSagas } from './src/containers/tvShowTabs/popular/sagas';
import { loadTopRatedTVShowsSagas } from './src/containers/tvShowTabs/topRated/sagas';
import { loadOnTheAirTVShowsSagas } from './src/containers/tvShowTabs/ontheAir/sagas';
import { loadTVShowDetailsSagas, loadTVShowExternalIdsSagas, loadTVShowCastSagas, loadTVShowPostersSagas } from './src/sharedComponents/tvShowDetailsPage/sagas';
export default function* rootSaga() {
    yield all([
        loadAPIConfigurationSagas(),
        loadNowPlayingSagas(),
        loadUpcomingSagas(),
        loadTopRatedSagas(),
        loadPopularSagas(),
        loadMovieDetailsSagas(),
        loadMovieExternalIdsSagas(),
        loadCastSagas(),
        loadPopularTVShowsSagas(),
        loadTopRatedTVShowsSagas(),
        loadTVShowDetailsSagas(),
        loadTVShowExternalIdsSagas(),
        loadTVShowCastSagas(),
        loadTVShowPostersSagas(),
        loadOnTheAirTVShowsSagas(),
    ])
}
