import React from 'react'
import {Alert, ScrollView, StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import CommunityCell from '../components/CommunityCell.js'

export default class ChallengeRequestsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            communities: [
                {icon:'walking', name:'#goFITgang', members:['Bryce','Olivia', 'Chris', 'CJ']},
                {icon:'weights', name:'bryceps', members:['Bryce','Olivia']},
                {icon:'water', name:'olifitup', members:['Olivia', 'Chris', 'CJ']},
                {icon:'weights', name:'TEAMFITLIT', members:['Bryce','Christina', 'Denis', 'Olivia']},
                {icon:'biking', name:'goFUT', members:['Bryce','Olivia']},
            ]
        }
    }
    
    add() {
        Alert.alert("I'm a communist!")
    }

    render() {
        var communities = this.state.communities.map(function(c, i) {
            if (i % 2 == 0) {
                coms = this.state.communities;
                if (i != coms.length - 1) {
                    return (<View key={i} style={styles.row}><CommunityCell icon={coms[i].icon} name={coms[i].name} members={coms[i].members}/><CommunityCell icon={coms[i+1].icon} name={coms[i+1].name} members={coms[i+1].members}/></View>);
                } else {
                    return (<View key={i} style={styles.row}><CommunityCell icon={coms[i].icon} name={coms[i].name} members={coms[i].members}/></View>);
                }
            }
        }, this);
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.alertBar} onPress={this.add}>
                    <Text style={styles.alertText}>+ ADD NEW COMMUNITY</Text>
                </TouchableHighlight>
                <ScrollView>
                    {communities}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    alertBar: {
        backgroundColor: 'orange',
        height: 30
    },
    alertText: {
        alignSelf: 'center',
        color: 'white',
        padding: 7
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 160
    },
});
