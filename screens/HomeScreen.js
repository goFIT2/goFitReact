import React from 'react';
import {Alert, Dimensions, Image, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import CommunityCell from '../components/CommunityCell.js'
import ActivityCell from '../components/ActivityCell.js'
import NewsfeedRow from '../components/NewsfeedRow.js'

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'goFIT',
    };

    constructor(props) {
        super(props);
        this.state = {
            activities: [
                {key:0, icon:'weights', name:'Barbell'},
                {key:1, icon:'running', name:'Leg Press'},
                {key:2, icon:'walking', name:'Walking'}
            ],
            newsfeed: [
                {key:0, friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'TEAMFITLIT', time:'30m'},
                {key:1, friend:'Chris', text:'Anyone doing the SoulCycle at Stanford this weekend?', community:'#goFITgang', time:'55m'},
                {key:2, friend:'Chris', text:'Chris joined the #goFITgang community.', community:'#goFITgang', time:'1hr'},
                {key:3, friend:'Bryce', text:'Bryce did 2 hours of walking today!', community:'goFIT', time:'2hr'},
                {key:4, friend:'CJ', text:'CJ joined the #goFITgang community.', community:'#goFITgang', time:'5hr'}
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
                    <FlatList data={this.state.newsfeed} renderItem={({item}) => <NewsfeedRow key={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time}/>}/>
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
