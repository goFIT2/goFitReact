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
            running: require('../assets/images/running.png'),
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
                <View style={styles.blueCircle} >
                    <Image source={images[this.state.name]} style={styles.challengeIcon} />
                </View>
                <View style={styles.challengeLabel}>
                    <Text>{requestName}</Text>
                    <Text style={styles.smallText}>{requestFrequency}</Text>
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
    blueCircle: {
        borderWidth: 2,
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: '#00FFFF',
        justifyContent: 'center',
        margin: 10
    },
    challengeIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    challengeLabel: {
        padding: 5,
        flex: 5
    },
    smallText: {
        fontSize: 10
    }
});

export default FriendProfileChallengeRow
