import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import FriendRequestsScreen from '../screens/FriendRequestsScreen.js'
import FriendProfileScreen from '../screens/FriendProfileScreen.js'

import ChallengesScreen from '../screens/ChallengesScreen.js'
import SocialScreen from '../screens/SocialScreen.js'

import AddProgressScreen from '../screens/AddProgressScreen.js'
import MyProgressScreen from '../screens/MyProgressScreen.js'
import CommunitiesScreen from '../screens/CommunitiesScreen'
import AddCommunityScreen from '../screens/AddCommunityScreen'


const HomeStackNavigator = StackNavigator( 
  {
    Home: {
      screen: HomeScreen
    },
    AddProgress: {
      screen: AddProgressScreen
    },
  }
)

const CommunityStackNavigator = StackNavigator(
  {
    Community: {
      screen: CommunitiesScreen 
    },
    AddCommunity: {
      screen: AddCommunityScreen
    }
  }
)

export default TabNavigator(
  {
    Progress: {
      screen: MyProgressScreen
    },
    Home: {
      screen: HomeStackNavigator
    }, 
    Community: {
      screen: CommunityStackNavigator
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
                ? `ios-home${focused ? '' : '-outline'}`
                : 'android-home';
            break;
          case 'Progress':
            iconName = `ios-trending-up${focused ? '' : '-outline'}`
            break;
          case 'Community':
            iconName = `ios-people${focused ? '' : '-outline'}`
            break
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
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
