import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import AddCell from '../components/AddCell.js'
import SocialCell from '../components/SocialCell.js'

export default class ChallengeRequestsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.alertBar}>
                        <Text style={styles.alertText}>2 NEW FRIEND REQUESTS →</Text>
                    </View>
                    <View style={styles.row}>
                        <AddCell />
                        <SocialCell name="Bryce"/>
                    </View>
                    <View style={styles.row}>
                        <SocialCell name="CJ"/>
                        <SocialCell name="Chris"/>
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
