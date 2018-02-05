import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class ProgressTableRow extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
        this.state = {
            name: props.name,
            amount: props.amount,
            measure: props.measure,
            date: props.date
        }
    }

    add() {
        Alert.alert('You are adding progress to ' + this.state.name + '!');
    }

    render() {
      let status = this.state.amount + " " + this.state.measure;
        return(
            <View style={styles.row}>
                <View style={{flex:3, flexDirection: 'row'}}>
                    <Text style = {styles.small}>1</Text>
                    <Text style={styles.small}>{status}</Text>
                    <Text style={styles.small}>{this.state.date}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 70
    },
    icon: {
        resizeMode: 'contain',
        padding: 20,
        height: 40,
        width: 40,
        flex: 1
    },
    label: {
        padding: 5,
        flex: 5
    },
    small: {
        fontSize: 10
    },
    mini: {
        fontSize: 10,
        justifyContent: 'center'
    },
    button: {
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    greenCircle: {
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#00FF00',
        justifyContent: 'center'
    },
    redCircle: {
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#FF0000',
        justifyContent: 'center'
    },
});

export default ProgressTableRow
