import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class FriendRequestView extends React.Component {
render() {
  return (
    <View style={styles.container}>
    <Image style = {{width: 30, height: 30}}
     source={require('../assets/images/robot-dev.png')}
    />
    <Text> Friend Request </Text>
     <Image
      style={{width: 30, height: 30}}
      source={require('../assets/images/accept_green.png')}
     />
     <Image
      style={{width: 30, height: 30}}
      source={require('../assets/images/reject_red.png')}
     />
    </View>
  );
}
}

const styles = StyleSheet.create({
     container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'stretch',
  },
  // container: {
  //   flex: 1,
  //   paddingTop: 15,
  //   backgroundColor: '#fff',
  // },
});
