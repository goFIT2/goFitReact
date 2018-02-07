import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class ChallengeCell extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.state = {
            amount: props.amount,
            measure: props.measure,
            name: props.name,
            frequency: props.frequency,
            friend: props.friend,
            progress: props.progress
        }
    }
    
    add() {
        Alert.alert('You chose the add button!')
    }

    render() {
        return(
            <View style={styles.row}>
                    <TouchableHighlight onPress={this.add}>
                        <View style={styles.greenCircle} >
                            <Image source={require('../assets/images/plus.png')} style={styles.button} />
                        </View>
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 150
    },
    icon: {
        resizeMode: 'contain',
        padding: 20,
        height: 40,
        width: 40,
        flex: 1
    },
    small: {
        fontSize: 10
    },
    button: {
        height: 40,
        width: 40,
        alignSelf: 'center'
    },
    greenCircle: {
        borderWidth: 2,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: '#00FF00',
        justifyContent: 'center'
    }
});

export default ChallengeCell
