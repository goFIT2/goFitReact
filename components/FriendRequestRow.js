import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class FriendRequestRow extends React.Component {

    constructor(props) {
        super(props)
        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.state = {
            name: props.name,
        }
    }
    
    accept() {
        Alert.alert('You accepted ' + this.state.name + '\'s friend request!')
    }
    
    reject() {
        Alert.alert('You rejected ' + this.state.name + '\'s friend request!')
    }

    render() {
        let images = {
            Bryce: require('../assets/images/bryce.jpg'),
            Chris: require('../assets/images/chris.jpg'),
            Christina: require('../assets/images/christina.jpg'),
            CJ: require('../assets/images/cj.jpg'),
            Denis: require('../assets/images/denis.jpg'),
            Olivia: require('../assets/images/olivia.jpg')
        }
        return(
            <View style={styles.row}>
                <View style={{flex:2}}>
                    <Image source={images[this.state.name]} style={styles.icon} />
                </View>
                <View style={styles.label}>
                    <Text>{this.state.name}</Text>
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
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    label: {
        margin: 5,
        flex: 5
    },
    button: {
        height: 35,
        width: 35
    }
});

export default FriendRequestRow
