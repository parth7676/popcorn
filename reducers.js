import { combineReducers } from 'redux-immutable';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RootNavigator } from './src/navigation/AppNavigator';
import loginPageReducer from './src/containers/login/reducer';
import moviesPageReducer from './src/containers/movies/reducer';

const navReducer = createNavigationReducer(RootNavigator);

export default combineReducers({
    nav: navReducer,
    moviesPage: moviesPageReducer,
});