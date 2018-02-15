import React from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class AddProgressScreen extends React.Component {

    constructor(props) {
        super(props);
        this.log = this.log.bind(this);
        this.checkValues = this.checkValues.bind(this);
        this.state = {
            amount: null,
            units: null,
            exercise: 'exercise',
            reps: null
        };
    }
    
    checkValues() {
        return (this.state.amount && this.state.units && this.state.reps);
    }
    
    log = () => {
        if (this.checkValues()) {
            Alert.alert('You logged ' + this.state.reps + ' x ' + this.state.amount + ' ' + this.state.units + ' of ' + this.state.exercise + '!');
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View>
                        <Text style={styles.text}>I have done</Text>
                        <TextInput style={styles.textinput} onChangeText={(amount) => this.setState({amount})} placeholder='5' keyboardType='numeric'/>
                        <TextInput style={styles.textinput} onChangeText={(units) => this.setState({units})} placeholder='miles' autoCapitalize='none' autoCorrect={false}/>
                        <Text style={styles.text}>of {this.state.exercise}</Text>
                        <TextInput style={styles.textinput} onChangeText={(reps) => this.setState({reps})} placeholder='10' keyboardType='numeric'/>
                        <Text style={styles.text}>{this.state.reps == 1 ? 'time' : 'times'}</Text>
                        <TouchableHighlight onPress={() => this.log()} style={{marginTop:15}}>
                            <Text style={this.checkValues() ? styles.button : styles.buttonGray}>Add Set</Text>
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
