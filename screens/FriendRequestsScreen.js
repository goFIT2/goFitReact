import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import FriendRequestRow from '../components/FriendRequestRow.js'

export default class FriendRequestsScreen extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <FriendRequestRow name="Beyonce Knowles-Carter" />
                    <FriendRequestRow name="Doug Doggington III" />
                    <FriendRequestRow name="Marc Tessier-Lavigne" />
                </ScrollView>
            </View>
        );
    }
}

