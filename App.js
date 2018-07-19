import React from 'react';
import store from './reduxStore';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';
import *as appActions from './src/containers/app/actions';
import Expo from "expo";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    store.dispatch(appActions.loadAPIConfiguration())
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}