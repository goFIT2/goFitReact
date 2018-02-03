import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import AddCell from '../components/AddCell.js'
import ChallengeCell from '../components/ChallengeCell.js'

export default class ChallengeRequestsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.alertBar}>
                        <Text style={styles.alertText}>5 NEW CHALLENGE REQUESTS →</Text>
                    </View>
                    <View style={styles.row}>
                        <AddCell />
                        <ChallengeCell amount="45" measure="min" name="walking" frequency="4" friend="Christina" progress="1"/>
                    </View>
                    <View style={styles.row}>
                        <ChallengeCell amount="4" measure="cup" name="water" frequency="7" friend="CJ" progress="3"/>
                        <ChallengeCell amount="20" measure="rep" name="jumprope" frequency="2" friend="Chris" progress="1"/>
                    </View>
                    <View style={styles.row}>
                        <ChallengeCell amount="1" measure="mi" name="walking" frequency="3" friend="Bryce" progress="2"/>
                    </View>
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
        height: 30,
        marginBottom: 30
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
