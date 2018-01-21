 import React from 'react';
 import FriendRequestView from '../components/FriendRequestView';
 import {ScrollView, StyleSheet} from 'react-native';


 export default class FriendRequestsScreen extends React.Component {

   // static navigationOptions = {
   //   title: 'Friend Requests',
   // };

   render() {
     return (
       <ScrollView style={styles.container}>
         <FriendRequestView />
       </ScrollView>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 15,
     backgroundColor: '#fff',
   },
 });
