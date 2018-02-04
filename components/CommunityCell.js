import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default class CommunityCell extends React.Component {

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
        Alert.alert('You chose the ' + this.state.name + ' community!')
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
        var friends = this.state.members.map(function(m, i) {
            return (<Image key={i} source={images[m]} style={styles.smallFriend} />);
        });
        return(
            <View style={styles.cell}>
                <TouchableHighlight onPress={this.detail}>
                    <View style={styles.circle} >
                        <Image source={images[this.state.icon]} style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <Text style={styles.name}>{this.state.name}</Text>
                <View style={{flexDirection:'row'}}>
                    {friends}
                </View>
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
        borderWidth: 2,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        alignSelf: 'center'
    },
    name: {
        fontWeight: '200',
        margin: 5
    },
    smallFriend: {
        height: 18,
        width: 18,
        borderRadius: 9,
        margin: 1
    }
});
