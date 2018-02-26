import React from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class CreateAccountScreen extends React.Component {

  constructor(props) {
      super(props)
      this.checkValues = this.checkValues.bind(this)
      this.create = this.create.bind(this)
      this.state = {
          firstname: '',
          lastname: '',
          email: '',
          password: ''
      }
  }

  checkValues() {
    return (this.state.firstname && this.state.lastname && this.state.email && this.state.password)
  }

  create() {
    if (this.checkValues()) {
      Alert.alert('This should create an account for user ' + this.state.firstname + ' ' + this.state.lastname + ' with email '+ this.state.email + ' and password ' + this.state.password + '.')
      this.props.navigation.goBack()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        </View>
        <View style={{flex:10}}>
          <FormLabel>First Name</FormLabel>
          <FormInput onChangeText={(firstname) => this.setState({firstname})} autoCapitalize='none' autoCorrect={false}/>
          <FormLabel>Last Name</FormLabel>
          <FormInput onChangeText={(lastname) => this.setState({lastname})} autoCapitalize='none' autoCorrect={false}/>
          <FormLabel>Email Address</FormLabel>
          <FormInput onChangeText={(email) => this.setState({email})} autoCapitalize='none' autoCorrect={false}/>
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={(password) => this.setState({password})} secureTextEntry={true} autoCapitalize='none' autoCorrect={false}/>
          <Button title='Create Account' style={styles.button} onPress={this.create} backgroundColor={this.checkValues() ? '#FB6D00' : 'gray'}/>
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
