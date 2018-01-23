import React from 'react'
import {Alert, Image, ProgressViewIOS, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import FriendProfileChallengeRow from '../components/FriendProfileChallengeRow.js'

export default class FriendProfileScreen extends React.Component {

    constructor() {
        super()
        this.challenge = this.challenge.bind(this)
        this.state = {
            name: 'CJ',
            level: 5,
            progress: 0.5
        }
    }
    
    challenge() {
        Alert.alert('You have challenged ' + this.state.name + '!')
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
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={images[this.state.name]} style={styles.pimg} />
                    <View style={styles.pdesc}>
                        <Text style={styles.pname}>{this.state.name}</Text>
                        <Text>Level {this.state.level}</Text>
                        <ProgressViewIOS progress={this.state.progress} />
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={styles.label}>Challenges With You</Text>
                    <ScrollView>
                        <FriendProfileChallengeRow name="walking" amount="5" frequency="2" measure="mi" />
                        <FriendProfileChallengeRow name="biking" amount="2" frequency="3" measure="hr" />
                        <FriendProfileChallengeRow name="salad" amount="1" frequency="5" measure="cup" />
                    </ScrollView>
                </View>
                <View style={styles.challenge}>
                    <TouchableHighlight onPress={this.challenge} style={{flex:1}}>
                        <Image source={require('../assets/images/plus_green.png')} style={styles.button} />
                    </TouchableHighlight>
                    <Text style={{flex:5}}>Challenge this friend!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pimg: {
        resizeMode: 'contain',
        margin: 5,
        height: 160,
        width: 160,
        flex: 1
    },
    pdesc: {
        flex:2,
        padding:10
    },
    pname: {
        paddingBottom: 10,
        fontSize: 35
    },
    label: {
        alignSelf: 'center',
        fontSize: 20,
        paddingVertical: 10
    },
    challenge: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        resizeMode: 'contain',
        padding: 5,
        height: 40,
        width: 40,
        flex: 1
    }
});
