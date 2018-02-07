import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class ChallengeCell extends React.Component {

    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
        this.state = {
            amount: props.amount,
            measure: props.measure,
            name: props.name,
            frequency: props.frequency,
            friend: props.friend,
            progress: props.progress
        }
    }
    
    detail() {
        Alert.alert('You chose the ' + this.state.name + ' challenge!')
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
            weights: require('../assets/images/weights.png'),
            
            Bryce: require('../assets/images/bryce.jpg'),
            Chris: require('../assets/images/chris.jpg'),
            Christina: require('../assets/images/christina.jpg'),
            CJ: require('../assets/images/cj.jpg'),
            Denis: require('../assets/images/denis.jpg'),
            Olivia: require('../assets/images/olivia.jpg')
        }
        let challengeName = this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)
        let challengeAmount = this.state.amount + ' ' + this.state.measure + 's'
        let challengeProgress = this.state.progress + ' of ' + this.state.frequency
        return(
            <View style={styles.row}>
                <View style={{flex:1}}>
                    <TouchableHighlight onPress={this.detail}>
                        <View style={styles.blueCircle} >
                            <Image source={images[this.state.name]} style={styles.button} />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text>{challengeName}</Text>
                    <Text style={styles.small}>{challengeAmount}</Text>
                    <Text style={styles.small}>{challengeProgress}</Text>
                    <Image source={images[this.state.friend]} style={styles.smallFriend} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 160
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
    blueCircle: {
        borderWidth: 2,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: '#00FFFF',
        justifyContent: 'center'
    },
    smallFriend: {
        height: 16,
        width: 16,
        borderRadius: 8
    }
});

export default ChallengeCell
