import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import LoginScreen from '../containers/login/LoginScreen';
import SignupScreen from '../containers/signup/signupScreen';
import Movies from '../containers/movies/movies';
import Ranks from '../containers/ranks/ranks';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

// const LoginStack = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Singnup: { screen: SignupScreen },
// }, {
//     headerMode: 'float',
//     navigationOptions: {
//       headerStyle: { backgroundColor: '#E73536' },
//       title: 'You are not logged in',
//       headerTintColor: 'white'
//     }
//   });

// const DrawerStack = createDrawerNavigator({

// });

const MoviesStack = createStackNavigator({
  Movies: { screen: Movies },
}, {
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Movies',
      drawerLabel: 'Movies',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="movie-creation" size={24} style={{ color: tintColor }} />
      ),
      headerStyle: {
        backgroundColor: '#e00e0e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  });

const RankStack = createStackNavigator({
  Ranks: { screen: Ranks },
}, {
    navigationOptions: {
      drawerLabel: 'Ranks',
    },
  });

const RootNavigator = createDrawerNavigator({
  Movies: {
    path: '/',
    screen: MoviesStack,
  },
  Ranks: {
    path: '/ranks',
    screen: RankStack
  }
},
  {
    initialRouteName: 'Movies',
    contentOptions: {
      activeTintColor: '#e00e0e',
    },
  });

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.get('nav'),
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };