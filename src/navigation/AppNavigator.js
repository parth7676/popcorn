import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// Movie Tab Pages
import NowPlaying from '../containers/movieTabs/nowPlaying/nowPlaying';
import TopRated from '../containers/movieTabs/topRated/topRated';
import Popular from '../containers/movieTabs/popular/popular';
import Upcoming from '../containers/movieTabs/upcoming/upcoming';
import DetailsPage from '../sharedComponents/detailsPage/detailPage';

//TV Show Tabs Pages
import PopularTVShows from '../containers/tvShowTabs/popular/popular';
import TopRatedTVShows from '../containers/tvShowTabs/topRated/topRated';
import OnTheAirTVShows from '../containers/tvShowTabs/ontheAir/ontheAir';
import TVShowDetailPage from '../sharedComponents/tvShowDetailsPage/detailPage';
import AiringTodayTVShows from '../containers/tvShowTabs/airingToday/airingToday'

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

const TVShowsTabStack = createBottomTabNavigator({
  'Airing Today': { screen: AiringTodayTVShows },
  'On The Air': { screen: OnTheAirTVShows },
  'Top Rated': { screen: TopRatedTVShows },
  'Trending': { screen: PopularTVShows },
},
  {
    initialRouteName: 'Airing Today',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'On The Air') {
          icon = <MaterialIcons name="airplay" size={25} color={tintColor} />;
        } else if (routeName === 'Airing Today') {
          icon = <Entypo name="clock" size={25} color={tintColor} />;
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
      headerLeft: <MaterialIcons style={{ paddingLeft: 20 }} name="menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
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
    screen: TVShowDetailPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
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
  TVShows: {
    screen: TVShowsTabStack,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'TV Shows',
      drawerLabel: 'TV Shows',
      headerLeft: <MaterialIcons style={{ paddingLeft: 20 }} name="menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
      headerStyle: {
        backgroundColor: '#e00e0e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  TVShowDetails: {
    screen: TVShowDetailPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    })
  }
},
  {
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
    initialRouteName: 'TV Shows',
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