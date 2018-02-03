import React from 'react';
import {Alert, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import CommunityCell from '../components/CommunityCell.js'
import ActivityCell from '../components/ActivityCell.js'
import NewsfeedRow from '../components/NewsfeedRow.js'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: [
                {icon:'weights', name:'weights'},
                {icon:'running', name:'running'},
                {icon:'walking', name:'walking'}
            ],
            newsfeed: [
                {friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'goFIT'},
                {friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'goFIT'},
                {friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'goFIT'},
                {friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'goFIT'},
                {friend:'Denis', text:'Hello my name is Denis and I like working out~', community:'goFIT'}
            ]
        };
    }
    
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -60}) }, 1)
    }

    render() {
        var activities = this.state.activities.map(function(c, i) {
            return (<View key={i} style={styles.cell}><ActivityCell icon={c.icon} name={c.name} /></View>);
        });
        var newsfeed = this.state.newsfeed.map(function(n, i) {
            return (<View key={i} style={styles.cell}><NewsfeedRow friend={n.friend} text={n.text} community={n.community}/></View>);
        });        return (
            <View style={styles.container}>
                <Text style={styles.label}>Quick Add</Text>
                <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} horizontal= {true} decelerationRate={0} snapToInterval={width-120} snapToAlignment={"center"} showsHorizontalScrollIndicator={false} contentInset={{top:0,left:60,bottom:0,right:60}} style={{flex:1}}>
                    {activities}
                </ScrollView>
                <Text style={styles.label}>FitFeed</Text>
                <ScrollView  style={{flex:1}}>
                    {newsfeed}
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
        fontWeight: '100',
        fontSize: 20,
        padding: 5
    }
});
