import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ProgressTable from '../components/ProgressTable.js'

class MyProgressRow extends React.Component {

    constructor(props) {
        super(props)
        this.reject = this.reject.bind(this);
        this.state = {
            amount: props.amount,
            measure: props.measure,
            name: props.name,
            frequency: props.frequency,
        }
    }

    reject() {
        Alert.alert('You are adding progress to ' + this.state.name + '!');
    }

    render() {
      let imageName = this.state.name.toLowerCase()
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
        let challengeName = this.state.name
        let requestFrequency = '(' + this.state.frequency + 'x per week)'
        let requestImage = '../assets/images/' + imageName + '.png'
        return(
            <View style={styles.row}>
                <View style={styles.circle}>
                  <Image source={images[this.state.name]} style={styles.icon} />
                </View>
                <View style={styles.label}>
                    <Text>{challengeName}</Text>
                    <ProgressTable/>
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
        height: 100
    },
    icon: {
        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    label: {
        padding: 5,
        flex: 5
    },
    small: {
        fontSize: 10
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
    circle: {
      margin: 10,
      borderWidth: 2,
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center'
    }
});

export default MyProgressRow
