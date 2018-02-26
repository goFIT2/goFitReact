import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


class SignInScreen extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    nameChanged = (text) => {
        this.setState({name: text})
    }

    emailChanged = (text) => {
        this.setState({email: text})
    }

    passwordChanged = (text) => {
        this.setState({password: text})
    }

    createAccountPressed = () => {
        console.log("Created Account for: " + this.state.name + this.state.email + this.state.password)
    }

    render(){
        return(
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={this.nameChanged}/>
                
                <FormLabel>Email Address</FormLabel>
                <FormInput onChangeText={this.emailChanged}/>
                
                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={this.passwordChanged}
                    secureTextEntry={true}
                />
                
                <Button
                    title='Create An Account' 
                    onPress={this.createAccountPressed}
                    backgroundColor='#32cd32'
                    />
            </View> 

        )
    }
}

export default SignInScreen 

