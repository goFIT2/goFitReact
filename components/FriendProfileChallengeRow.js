import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native'

class FriendProfileChallengeRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: props.amount,
            measure: props.measure,
            name: props.name,
            frequency: props.frequency
        }
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

export default FriendProfileChallengeRow
