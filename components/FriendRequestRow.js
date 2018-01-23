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
        Alert.alert('You accepted ' + this.state.name.split(" ")[0] + '\'s friend request!')
    }
    
    reject() {
        Alert.alert('You rejected ' + this.state.name.split(" ")[0] + '\'s friend request!')
    }

    render() {
        let requestName = this.state.name
        let requestImage = require('../assets/images/friend.png')
        return(
            <View style={styles.row}>
                <Image source={requestImage} style={styles.icon} />
                <View style={styles.label}>
                    <Text>{requestName}</Text>
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
        width: 35
    }
});

export default FriendRequestRow
