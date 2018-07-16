import React from 'react';
import store from './reduxStore';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}