import React from 'react'
import {Alert, FlatList, Image, ProgressViewIOS, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import NewsfeedRow from '../components/NewsfeedRow'

export default class IndividualCommunityScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '#goFITgang',
            icon: require('../assets/images/social.png'),
            members: ['Bryce', 'Olivia', 'Chris', 'CJ'],
            newsfeed: [
                {key:0, friend:'CJ', text:'Wow I just benched 7000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'3h', likes:['Chris'], attachment:'CJ completed bench press today.'},
                {key:1, friend:'Olivia', text:'I plan on going to the gym later today. Anyone wanna come?', community:'#goFITgang', time:'5h', likes:['Bryce'], attachment:''},
                {key:2, friend:'Chris', text:'TBH this is way better than SoulCycle.', community:'#goFITgang', time:'20h', likes:['Bryce', 'Olivia'], attachment:'Chris completed outdoor cycling today.'},
                {key:3, friend:'Bryce', text:'', community:'#goFITgang', time:'1d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
                {key:4, friend:'CJ', text:'Wow I just benched 6000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'2d', likes:['Chris'], attachment:'CJ completed bench press today.'},
                {key:5, friend:'Bryce', text:'Olivia I saw you running today. Keep it up!', community:'#goFITgang', time:'2d', likes:['Olivia'], attachment:''},
                {key:6, friend:'Olivia', text:'', community:'#goFITgang', time:'2d', likes:[], attachment:'Olivia completed running today.'},
                {key:7, friend:'Chris', text:'Does anyone want to do SoulCycle with me and Olivia tonight?', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:''},
                {key:8, friend:'Chris', text:'', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:'Chris completed barbell bench press, chin ups today.'},
                {key:9, friend:'Bryce', text:'', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
                {key:10, friend:'CJ', text:'In shocking news, I just got asked to go out on a data... that\'s a first.', community:'#goFITgang', time:'4d', likes:['Chris'], attachment:''},
                {key:11, friend:'CJ', text:'Wow I just benched 5000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'4d', likes:['Bryce', 'Olivia', 'Chris'], attachment:'CJ completed bench press today.'},
                {key:12, friend:'Bryce', text:'', community:'#goFITgang', time:'4d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
                {key:13, friend:'Chris', text:'I\'m excited to work out with you all!', community:'#goFITgang', time:'4d', likes:['Bryce', 'Olivia', 'CJ'], attachment:''},
                {key:14, friend:'Olivia', text:'Hi Chris and CJ!', community:'#goFITgang', time:'4d', likes:['CJ', 'Chris'], attachment:''},
                {key:15, friend:'Olivia', text:'', community:'#goFITgang', time:'4d', likes:['Bryce', 'CJ', 'Chris'], attachment:'Olivia added CJ, Chris to #goFITgang.'},
                {key:16, friend:'Olivia', text:'', community:'#goFITgang', time:'5d', likes:['Bryce'], attachment:'Olivia completed running, rowing today.'},
                {key:17, friend:'Bryce', text:'', community:'#goFITgang', time:'5d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
                {key:18, friend:'Olivia', text:'Yay time to get fit again!', community:'#goFITgang', time:'5d', likes:['Bryce'], attachment: ''},
                {key:19, friend:'Bryce', text:'', community:'#goFITgang', time:'5d', likes:['Olivia'], attachment:'Bryce created the #goFITgang community with Olivia.'},
                {key:20, friend:'Bryce', text:'', community:'bryceps', time:'5d', likes:[], attachment:'Bryce created the bryceps community with Olivia.'},
                {key:21, friend:'Olivia', text:'', community:'oliftitup', time:'5d', likes:['Olivia'], attachment:'Olivia created the oliftitup community with Chris, CJ.'},
                {key:22, friend:'Olivia', text:'', community:'TEAMFITLIT', time:'5d', likes:[], attachment:'Olivia created the TEAMFITLIT community with Bryce.'},
                {key:23, friend:'Bryce', text:'', community:'goFUT', time:'5d', likes:[], attachment:'Bryce created the goFUT community with Olivia.'},
            ]
        }
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
        var friends = this.state.members.map(function(m, i) {
            return (<Image key={i} source={images[m]} style={styles.smallFriend} />);
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.circle} >
                        <Image source={this.state.icon} style={styles.icon} />
                    </View>
                    <View style={styles.communityLabel}>
                        <Text style={styles.communityName}>{this.state.name}</Text>
                        <View style={{flexDirection:'row'}}>
                            {friends}
                        </View>
                    </View>
                </View>
                <View style={{flex:5}}>
                    <Text style={styles.subheader}>Community Feed</Text>
                    <ScrollView>
                        <FlatList data={this.state.newsfeed.filter(item => item.community == this.state.name)} renderItem={({item}) => <NewsfeedRow key={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time} likes={item.likes} attachment={item.attachment} />}/>
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
    communityLabel: {
        flex:2,
        padding:10
    },
    communityName: {
        paddingBottom: 10,
        fontSize: 35,
        fontWeight: '200'
    },
    subheader: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '300',
        paddingVertical: 10
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
