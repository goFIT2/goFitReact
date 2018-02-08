import React from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { WebBrowser } from 'expo';


export default class AddWorkoutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.log = this.log.bind(this);
        this.checkValues = this.checkValues.bind(this);
        this.state = {
            exercise: null,
            time: null
        };
    }
    
    checkValues() {
        return (this.state.exercise && this.state.time);
    }
    
    log = () => {
        if (this.checkValues()) {
            Alert.alert('You can now log sets for ' + this.state.exercise + ' ' + this.state.time + '!');
            this.props.navigation.goBack()
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View>
                        <Text style={styles.text}>I want to log</Text>
                        <TextInput style={styles.textinput} onChangeText={(exercise) => this.setState({exercise})} placeholder='running' autoCapitalize='none' autoCorrect={false}/>
                        <Text style={styles.text}>for</Text>
                        <TextInput style={styles.textinput} onChangeText={(time) => this.setState({time})}placeholder='today' autoCapitalize='none' autoCorrect={false}/>
                        <TouchableHighlight onPress={() => this.log()} style={{marginTop:15}}>
                            <Text style={this.checkValues() ? styles.button : styles.buttonGray}>Add Activity</Text>
                        </TouchableHighlight>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    text: {
        fontSize: 50,
        fontWeight: '900'
    },
    textinput: {
        fontSize: 45,
        fontWeight: '400'
    },
    button: {
        color: '#0076FF',
        fontSize: 30,
        fontWeight: '900'
    },
    buttonGray: {
        color: 'gray',
        fontSize: 30,
        fontWeight: '900'
    }
     
});
