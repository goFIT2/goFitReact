import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import ChallengeRequestRow from '../components/ChallengeRequestRow.js'

export default class ChallengeRequestsScreen extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <ChallengeRequestRow amount="4" measure="cup" name="salad" frequency="3" friend="Denis" />
                    <ChallengeRequestRow amount="45" measure="min" name="walking" frequency="4" friend="Christina" />
                    <ChallengeRequestRow amount="4" measure="cup" name="water" frequency="7" friend="CJ" />
                    <ChallengeRequestRow amount="20" measure="rep" name="jumprope" frequency="2" friend="Chris" />
                    <ChallengeRequestRow amount="1" measure="mi" name="walking" frequency="3" friend="Bryce" />
                </ScrollView>
            </View>
        );
    }
}
