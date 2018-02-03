import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import FriendRequestRow from '../components/FriendRequestRow.js'

export default class FriendRequestsScreen extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <FriendRequestRow name="Christina" />
                    <FriendRequestRow name="Denis" />
                </ScrollView>
            </View>
        );
    }
}

