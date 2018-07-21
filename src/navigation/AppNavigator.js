import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Movies from '../containers/movies/movies';

// Movie Tab Pages
import NowPlaying from '../containers/movieTabs/nowPlaying/nowPlaying';
import TopRated from '../containers/movieTabs/topRated/topRated';
import Popular from '../containers/movieTabs/popular/popular';
import Upcoming from '../containers/movieTabs/upcoming/upcoming';

import TVShows from '../containers/tvShows/tvShows';
import DetailsPage from '../sharedComponents/detailsPage/detailPage';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


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
const MovieTabStack = createBottomTabNavigator({
  'Now Playing': { screen: NowPlaying },
  'Upcoming': { screen: Upcoming },
  'Top Rated': { screen: TopRated },
  'Trending': { screen: Popular },
},
  {
    initialRouteName: 'Now Playing',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Now Playing') {
          icon = <MaterialIcons name="airplay" size={25} color={tintColor} />;
        } else if (routeName === 'Upcoming') {
          icon = <Entypo name="calendar" size={25} color={tintColor} />;
        } else if (routeName === "Top Rated") {
          icon = <MaterialIcons name="star" size={25} color={tintColor} />;
        } else if (routeName === 'Trending') {
          icon = <MaterialIcons name="trending-up" size={25} color={tintColor} />;
        }
        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e00e0e',
      inactiveTintColor: 'gray',
    },
  });

const MoviesStack = createStackNavigator({
  Movies: {
    screen: MovieTabStack,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Movies',
      drawerLabel: 'Movies',
      headerLeft: <MaterialIcons style={{ padding: 20 }} name="menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
      headerStyle: {
        backgroundColor: '#e00e0e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  MovieDetails: {
    screen: DetailsPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }

}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#e00e0e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  });

const TVShowsStack = createStackNavigator({
  TVShows: { screen: DetailsPage },
}, {
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'TV Shows',
      drawerLabel: 'TV Shows',
      headerLeft: <MaterialIcons style={{ padding: 20 }} name="menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
      headerStyle: {
        backgroundColor: '#e00e0e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  });

const RootNavigator = createDrawerNavigator({
  'Movies': {
    path: '/',
    screen: MoviesStack,
  },
  'TV Shows': {
    path: '/tvshows',
    screen: TVShowsStack
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