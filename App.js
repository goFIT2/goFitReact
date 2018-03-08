import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import MainTabNavigator from './navigation/MainTabNavigator';
import { Provider  } from 'react-redux'
import { store } from './reducers/index'
import * as firebase from 'firebase'
import { connect } from 'react-redux'

import { initialLoad } from './actions/index'
import AppIsLoading from './AppIsLoading'

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      console.log('rednering laoding')
      return (
        <View> 
          <Provider store={store}>
            <AppIsLoading doneLoading={() => this.setState({isLoadingComplete: true})} />
          </Provider>
        </View> 
      );
    } else {
      console.log('rendering actual')
      return (
            <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            <Provider store={store}>
              <MainTabNavigator />
            </Provider>
            </View>

      );
    }
  }
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

export default App 