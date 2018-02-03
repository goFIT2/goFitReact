import React from 'react';
import {Alert, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import CommunityCell from '../components/CommunityCell'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            communities: [
                {icon:'weights', name:'#goFITgang', members:['Bryce','Chris','CJ','Olivia']},
                {icon:'water', name:'bryceps', members:['Bryce', 'Olivia']},
                {icon:'walking', name:'oliftitup', members:['Olivia', 'Chris', 'CJ']}
            ]
        };
    }

    prev() {
        if (this.state.currentCommunityIndex > 0) {
            this.setState({currentCommunityIndex: this.state.currentCommunityIndex - 1});
        }
    }
    
    next() {
        if (this.state.currentCommunityIndex < this.state.communities.length - 1) {
            this.setState({currentCommunityIndex: this.state.currentCommunityIndex + 1});
        }
    }
    
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -60}) }, 1)
    }

    render() {
        var communities = this.state.communities.map(function(c, i) {
            return (<View key={i} style={styles.cell}><CommunityCell icon={c.icon} name={c.name} members={c.members} /></View>);
        });
        return (
            <View style={styles.container}>
                <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} horizontal= {true} decelerationRate={0} snapToInterval={width-120} snapToAlignment={"center"} showsHorizontalScrollIndicator={false} contentInset={{top:0,left:60,bottom:0,right:60}}>
                    {communities}
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
        height: 250,
        alignSelf:'center'
    }
     
});
