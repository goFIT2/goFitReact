import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class CommunityCell extends React.Component {

    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
        this.state = {
            icon: props.icon,
            name: props.name,
            members: props.members
        }
    }
    
    detail() {
        Alert.alert('You chose the ' + this.state.name + ' activity!')
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
        }
        return(
            <View style={styles.cell}>
                <TouchableHighlight onPress={this.detail}>
                    <View style={styles.circle} >
                        <Image source={images[this.state.icon]} style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <Text style={styles.name}>{this.state.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        borderWidth: 3,
        height: 160,
        width: 160,
        borderRadius: 80,
        justifyContent: 'center'
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    name: {
        fontSize: 25,
        fontWeight: '200',
        margin: 10
    }
});

export default CommunityCell
