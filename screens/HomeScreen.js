import React from 'react';
import {Alert, Dimensions, Image, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';


import CommunityCell from '../components/CommunityCell.js'
import ActivityCell from '../components/ActivityCell.js'
import NewsfeedRow from '../components/NewsfeedRow.js'

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'goFIT',
        headerTitle: (
            <Image source={require('../assets/images/logo.png')}  style={{resizeMode: 'contain', height:30}}/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            activities: [
                {key:0, icon:'weights', name:'Barbell Bench Press'},
                {key:1, icon:'jumprope', name:'Chin Ups'},
            ],
            newsfeed: [
                {key:0, friend:'CJ', text:'Wow I just benched 7000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'3h', likes:['Chris'], attachment:'CJ completed bench press today.'},
                {key:1, friend:'Olivia', text:'I plan on going to the gym later today. Anyone wanna come?', community:'#goFITgang', time:'5h', likes:['Bryce'], attachment:''},
                {key:2, friend:'Chris', text:'TBH this is way better than SoulCycle.', community:'#goFITgang', time:'20h', likes:['Bryce', 'Olivia'], attachment:'Chris completed outdoor cycling today.'},
                {key:3, friend:'Bryce', text:'', community:'#goFITgang', time:'1d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
                {key:4, friend:'CJ', text:'Wow I just benched 6000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'2d', likes:['Chris'], attachment:'CJ completed bench press today.'},
                {key:5, friend:'Bryce', text:'Olivia I saw you running today. Keep it up!', community:'', time:'2d', likes:['Olivia'], attachment:''},
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
        };
        
    }
    
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -60}) }, 1)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Quick Add</Text>
                <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} horizontal= {true} decelerationRate={0} snapToInterval={width-120} snapToAlignment={"center"} showsHorizontalScrollIndicator={false} contentInset={{top:0,left:60,bottom:0,right:60}} style={{flex:1}}>
                    <FlatList horizontal={true} data={this.state.activities} renderItem={({item}) => 
                        <View key={item.key} style={styles.cell}>
                            <ActivityCell icon={item.icon} name={item.name} navigation={this.props.navigation} />
                        </View>}/> 
                </ScrollView>
                <Text style={styles.label}>Fit Feed</Text>
                <ScrollView  style={{flex:1}}>
                    <FlatList data={this.state.newsfeed} renderItem={({item}) => <NewsfeedRow key={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time} likes={item.likes} attachment={item.attachment} />}/>
                </ScrollView>
            </View>
        );
    }

}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cell: {
        width: width,
        marginHorizontal: -60,
        alignSelf:'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5
    }
});
