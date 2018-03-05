import React from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
    headerTitle: (
      <Image source={require('../assets/images/logo.png')}  style={{resizeMode: 'contain', height:30}}/>
    ),
  };

  constructor(props) {
      super(props)
      this.checkValues = this.checkValues.bind(this)
      this.state = {
          email: '',
          password: ''
      }
  }

  checkValues() {
    return (this.state.email && this.state.password)
  }

  login = () => {
    if (this.checkValues()) {
      this.props.navigation.navigate('Home')
    }
  }

  create = () => {
    this.props.navigation.navigate('Create')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        </View>
        <View style={{flex:1}}>
            <FormLabel>Email Address</FormLabel>
            <FormInput onChangeText={(email) => this.setState({email})} autoCapitalize='none' autoCorrect={false}/>
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={(password) => this.setState({password})} secureTextEntry={true} autoCapitalize='none' autoCorrect={false}/>
            <Button title='Log In' style={styles.button} onPress={this.login} backgroundColor={this.checkValues() ? '#FB6D00' : 'gray'}/>
            <TouchableHighlight onPress={this.create} style={{margin:15}}>
              <Text style={styles.createButton}>Create Account</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    margin: 100
  },
  button: {
    marginTop: 15
  },
  createButton: {
    color: '#0076FF'
  }
})
