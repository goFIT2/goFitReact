import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default class NewsfeedRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friend: props.friend,
            community: props.community,
            text: props.text
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
            Bryce: require('../assets/images/bryce.jpg'),
            Chris: require('../assets/images/chris.jpg'),
            Christina: require('../assets/images/christina.jpg'),
            CJ: require('../assets/images/cj.jpg'),
            Denis: require('../assets/images/denis.jpg'),
            Olivia: require('../assets/images/olivia.jpg')
        }
        return(
            <View style={styles.row}>
                <Image source={images[this.state.friend]} style={styles.icon} />
                <View style={styles.label}>
                    <Text style={styles.communityLabel}>{this.state.community + ' Community'}</Text>
                    <Text>{this.state.text}</Text>
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
    },
    icon: {
        alignSelf: 'center',
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    label: {
        padding: 5,
        flex: 5
    },
    communityLabel: {
        color: 'gray',
        fontSize: 10,
        paddingBottom: 1
    }
});
