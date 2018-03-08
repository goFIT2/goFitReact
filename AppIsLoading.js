import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import MainTabNavigator from './navigation/MainTabNavigator';
import { Provider  } from 'react-redux'
import { store } from './reducers/index'
import * as firebase from 'firebase'
import { connect } from 'react-redux'

import { initialLoad } from './actions/index'


class AppIsLoading extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
      return (
        <View> 
            <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
            />
        </View> 
      );
  }

  _loadResourcesAsync = async () => {

    const usersRef = firebase.database().ref('/users')
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'sf-bold': require('./assets/fonts/SanFranciscoText-Bold.otf'),
        'sf-heavy': require('./assets/fonts/SanFranciscoText-Heavy.otf'),
        'sf-light': require('./assets/fonts/SanFranciscoText-Light.otf'),
        'sf-medium': require('./assets/fonts/SanFranciscoText-Medium.otf'),
        'sf-regular': require('./assets/fonts/SanFranciscoText-Regular.otf'),
        'sf-semibold': require('./assets/fonts/SanFranciscoText-Semibold.otf'),
        'Material Icons': require('./assets/fonts/SanFranciscoText-Light.otf')
      },
    ),
    //Load Firebase API here
    this.props.initialLoad()
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.props.doneLoading()
  };
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initialLoad: () => dispatch(initialLoad())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppIsLoading)