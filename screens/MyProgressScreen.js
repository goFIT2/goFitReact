import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import MyProgressRow from '../components/MyProgressRow.js'

export default class ChallengeRequestsScreen extends React.Component {
    render() {
        return (
            <View>
            <View style={styles.alertBar}>
                <Text style={styles.alertText}>ADD PROGRESS →</Text>
            </View>
                <ScrollView>
                    <MyProgressRow amount="4" measure="rep" name="weights" frequency="3"/>
                    <MyProgressRow amount="45" measure="min" name="walking" frequency="4"/>
                    <MyProgressRow amount="4" measure="cup" name="water" frequency="7"/>
                    <MyProgressRow amount="20" measure="rep" name="jumprope" frequency="2"/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    alertBar: {
        backgroundColor: 'orange',
        height: 30,
        marginBottom: 30
    },
    alertText: {
        alignSelf: 'center',
        color: 'white',
        padding: 7
    },
});
