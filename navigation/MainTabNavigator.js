import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';

import AddProgressScreen from '../screens/AddProgressScreen'
import CommunitiesScreen from '../screens/CommunitiesScreen'
import AddCommunityScreen from '../screens/AddCommunityScreen'
import Exercise from '../components/Exercise'
import ProgressScreen from '../screens/ProgressScreen'
import PlaceholderCommunityScreen from '../screens/PlaceholderCommunityScreen'

const HomeStackNavigator = StackNavigator( 
  {
    Home: {
      screen: HomeScreen,
    },
    AddProgress: {
      screen: AddProgressScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  },

  
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
      screen: PlaceholderCommunityScreen,
    }
  },
  {
    headerMode: 'none'
  }

)

const ProgressStackNavigator = StackNavigator( 
  {
    Progress: {
      screen: ProgressScreen,
    }
  },
  {
    headerMode: 'none'
  }
)

const MainTabNavigator =  TabNavigator(
  {
    Progress: {
      screen: ProgressScreen,
    },
    Home: {
      screen: HomeScreen
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
