import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import CreateChallengeScreen from '../screens/CreateChallengeScreen'

import ChallengeRequestsScreen from '../screens/ChallengeRequestsScreen.js'
import FriendRequestsScreen from '../screens/FriendRequestsScreen.js'
import FriendProfileScreen from '../screens/FriendProfileScreen.js'

import ChallengesScreen from '../screens/ChallengesScreen.js'
import SocialScreen from '../screens/SocialScreen.js'
import SignInScreen from '../screens/SignInScreen.js'

import AddProgressScreen from '../screens/AddProgressScreen'


export default TabNavigator(
  {
    SignIn: {
        screen: SignInScreen
    },
    Social: {
        screen: SocialScreen
    },
    Profile: {
      screen: FriendProfileScreen,
    },
    Friend: {
      screen: FriendRequestsScreen,
    },
    Challenge: {
      screen: ChallengeRequestsScreen,
    },
    Create: {
      screen: CreateChallengeScreen,
    },
    AddProgressScreen: {
      screen: AddProgressScreen
    },
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
