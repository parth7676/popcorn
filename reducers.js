import { combineReducers } from 'redux-immutable';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RootNavigator } from './src/navigation/AppNavigator';
import appReducer from './src/containers/app/reducer';

// Movie Reducers
import nowPlayingReducer from './src/containers/movieTabs/nowPlaying/reducer';
import popularReducer from './src/containers/movieTabs/popular/reducer';
import topRatedReducer from './src/containers/movieTabs/topRated/reducer';
import upcomingReducer from './src/containers/movieTabs/upcoming/reducer';
import movieDetailReducer from './src/sharedComponents/detailsPage/reducer';

// TV Reducers
import popularTVShowsReducer from './src/containers/tvShowTabs/popular/reducer';
import topRatedTVShowsReducer from './src/containers/tvShowTabs/topRated/reducer';
import tvShowDetailReducer from './src/sharedComponents/tvShowDetailsPage/reducer';

const navReducer = createNavigationReducer(RootNavigator);

export default combineReducers({
    nav: navReducer,
    globalState: appReducer,
    nowPlayingMovies: nowPlayingReducer,
    popularMovies: popularReducer,
    topRatedMovies: topRatedReducer,
    upcomingMovies: upcomingReducer,
    movieDetails: movieDetailReducer,
    popularTVShows: popularTVShowsReducer,
    topRatedTVShows: topRatedTVShowsReducer,
    tvShowDetails: tvShowDetailReducer
});