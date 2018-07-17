import React from 'react';
import store from './reduxStore';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';
import *as appActions from './src/containers/app/actions';

export default class App extends React.Component {
  render() {
    store.dispatch(appActions.loadAPIConfiguration())
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}