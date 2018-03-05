import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';

import CommunitiesScreen from '../screens/CommunitiesScreen'
import CreateCommunityScreen from '../screens/CreateCommunityScreen'
import IndividualCommunityScreen from '../screens/IndividualCommunityScreen'
import ShareProgressScreen from '../screens/ShareProgressScreen'

import LogProgressScreen from '../screens/LogProgressScreen'
import IndividualExerciseScreen from '../screens/IndividualExerciseScreen'

import LoginScreen from '../screens/LoginScreen'
import CreateAccountScreen from '../screens/CreateAccountScreen'

const CommunityStackNavigator = StackNavigator(
  {
    Community: {
      screen: CommunitiesScreen,
    },
    AddCommunity: {
      screen: CreateCommunityScreen,
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
    },
    IndividualExercise: {
      screen: IndividualExerciseScreen
    }
  },
  {
    headerMode: 'float'
  }
)

const LoginStackNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Create: {
      screen: CreateAccountScreen,
    },
    Home: {
      screen: HomeScreen,
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'float'
  }
)

const MainTabNavigator =  TabNavigator(
  {
    Progress: {
      screen: ProgressStackNavigator,
    },
    Home: {
      screen: LoginStackNavigator
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
