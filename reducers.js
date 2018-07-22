import { combineReducers } from 'redux-immutable';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RootNavigator } from './src/navigation/AppNavigator';
import appReducer from './src/containers/app/reducer';

// Movie Reducers
import moviesPageReducer from './src/containers/movies/reducer';
import nowPlayingReducer from './src/containers/movieTabs/nowPlaying/reducer';
import popularReducer from './src/containers/movieTabs/popular/reducer';
import topRatedReducer from './src/containers/movieTabs/topRated/reducer';
import upcomingReducer from './src/containers/movieTabs/upcoming/reducer';
import movieDetailReducer from './src/sharedComponents/detailsPage/reducer';

// TV Reducers

const navReducer = createNavigationReducer(RootNavigator);

export default combineReducers({
    nav: navReducer,
    globalState: appReducer,
    moviesPage: moviesPageReducer,
    nowPlayingMovies: nowPlayingReducer,
    popularMovies: popularReducer,
    topRatedMovies: topRatedReducer,
    upcomingMovies: upcomingReducer,
    movieDetails: movieDetailReducer
});