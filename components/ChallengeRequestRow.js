import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class ChallengeRequestRow extends React.Component {

    constructor(props) {
        super(props)
        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.state = {
            amount: props.amount,
            measure: props.measure,
            name: props.name,
            frequency: props.frequency,
            friend: props.friend
        }
    }
    
    accept() {
        Alert.alert('You accepted ' + this.state.friend.split(" ")[0] + '\'s ' + this.state.name + ' challenge!')
    }
    
    reject() {
        Alert.alert('You rejected ' + this.state.friend.split(" ")[0] + '\'s ' + this.state.name + ' challenge!')
    }

    render() {
        let images = {
            biking: require('../assets/images/biking.png'),
            jumprope: require('../assets/images/jumprope.png'),
            salad: require('../assets/images/salad.png'),
            salad: require('../assets/images/salad.png'),
            swimming: require('../assets/images/swimming.png'),
            walking: require('../assets/images/walking.png'),
            water: require('../assets/images/water.png'),
            weights: require('../assets/images/weights.png')
        }
        let requestName = this.state.amount + ' ' + this.state.measure + ' ' + this.state.name + ' challenge'
        let requestFrequency = '(' + this.state.frequency + 'x per week)'
        let requestFriend = this.state.friend + ' challenged you!'
        let requestImage = '../assets/images/' + this.state.name + '.png'
        return(
            <View style={styles.row}>
                <Image source={images[this.state.name]} style={styles.icon} />
                <View style={styles.label}>
                    <Text>{requestName}</Text>
                    <Text style={styles.small}>{requestFrequency}</Text>
                    <Text style={styles.small}>{requestFriend}</Text>
                </View>
                <TouchableHighlight onPress={this.accept} style={{flex:1}}>
                    <Image source={require('../assets/images/accept_green.png')} style={styles.button} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.reject} style={{flex:1}}>
                    <Image source={require('../assets/images/reject_red.png')} style={styles.button} />
                </TouchableHighlight>
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
    button: {
        resizeMode: 'contain',
        padding: 5,
        height: 35,
        width: 35,
    }
});

export default ChallengeRequestRow
