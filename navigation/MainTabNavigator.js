import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';

import CommunitiesScreen from '../screens/CommunitiesScreen'
import AddCommunityScreen from '../screens/AddCommunityScreen'

import LogProgressScreen from '../screens/LogProgressScreen'
import IndividualCommunityScreen from '../screens/IndividualCommunityScreen'
import ShareProgressScreen from '../screens/ShareProgressScreen';


const HomeStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float'
  }
)

const CommunityStackNavigator = StackNavigator(
  {
    Community: {
      screen: CommunitiesScreen,
    },
    AddCommunity: {
      screen: AddCommunityScreen,
    },
    IndividualCommunity: {
      screen: IndividualCommunityScreen,
    },
    ShareProgress: {
      screen: ShareProgressScreen
    }
  },
  {
    headerMode: 'float'
  }

)

const ProgressStackNavigator = StackNavigator(
  {
    Progress: {
      screen: LogProgressScreen,
    }
  },
  {
    headerMode: 'float'
  }
)

const MainTabNavigator =  TabNavigator(
  {
    Progress: {
      screen: ProgressStackNavigator,
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


export default MainTabNavigator
