import React from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class AddProgressScreen extends React.Component {

    constructor(props) {
        super(props);
        this.log = this.log.bind(this)
        this.state = {
            amount: 'X',
            measure: 'sets',
            exercise: 'exercise',
            time: 'today'
        };
    }
    
    log() {
        Alert.alert('You logged ' + this.state.amount + ' ' + this.state.measure + ' of ' + this.state.exercise + ' for ' + this.state.time + '!');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View>
                        <Text style={styles.text}>I have done</Text>
                        <TextInput style={styles.textinput} onChangeText={(amount) => this.setState({amount})} placeholder='10' keyboardType='numeric'/>
                        <TextInput style={styles.textinput} onChangeText={(measure) => this.setState({measure})} placeholder='miles' autoCapitalize='none' autoCorrect={false}/>
                        <Text style={styles.text}>of</Text>
                        <TextInput style={styles.textinput} onChangeText={(exercise) => this.setState({exercise})} placeholder='running' autoCapitalize='none' autoCorrect={false}/>
                        <TextInput style={styles.textinput} onChangeText={(time) => this.setState({time})}placeholder='today' autoCapitalize='none' autoCorrect={false}/>
                        <TouchableHighlight onPress={this.log} style={{marginTop:15}}>
                            <Text style={styles.button}>Log Progress</Text>
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
    }
     
});
