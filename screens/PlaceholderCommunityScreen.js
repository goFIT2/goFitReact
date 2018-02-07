import React from 'react'
import {Alert, FlatList, Image, ProgressViewIOS, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import NewsfeedRow from '../components/NewsfeedRow'

export default class PlaceholderCommunityScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '#goFITgang',
            icon: 'weights',
            members: ['Bryce', 'Olivia', 'Chris', 'CJ'],
            newsfeed: [
                {key:1, friend:'Chris', text:'Anyone doing the SoulCycle at Stanford this weekend?', community:'#goFITgang', time:'55m'},
                {key:2, friend:'Chris', text:'Chris joined the #goFITgang community.', community:'#goFITgang', time:'1hr'},
                {key:4, friend:'CJ', text:'CJ joined the #goFITgang community.', community:'#goFITgang', time:'5hr'}
            ]
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
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.circle} >
                        <Image source={images[this.state.icon]} style={styles.icon} />
                    </View>
                    <View style={styles.profileLabel}>
                        <Text style={styles.profileName}>{this.state.name}</Text>
                        <View style={{flexDirection:'row'}}>
                            {friends}
                        </View>
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={styles.subheader}>Community Feed</Text>
                    <ScrollView>
                        <FlatList data={this.state.newsfeed} renderItem={({item}) => <NewsfeedRow key={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time}/>}/>
                    </ScrollView>
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
    profileImage: {
        resizeMode: 'contain',
        margin: 5,
        height: 160,
        width: 160,
        flex: 1
    },
    profileLabel: {
        flex:2,
        padding:10
    },
    profileName: {
        paddingBottom: 10,
        fontSize: 35
    },
    subheader: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '300',
        paddingVertical: 10
    },
    challenge: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        margin: 10,
        marginLeft: 20,
        borderWidth: 3,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        borderColor: '#FB6D00'
    },
    icon: {
        height: 40,
        width: 40,
        alignSelf: 'center'
    },
    smallFriend: {
        height: 18,
        width: 18,
        borderRadius: 9,
        margin: 1
    }
});
