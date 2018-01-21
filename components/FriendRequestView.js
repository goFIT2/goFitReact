import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class FriendRequestView extends React.Component {
render() {
  return (
    <View style={styles.container}>
    <Image style = {styles.borderedimage}
     source={require('../assets/images/robot-dev.png')}
    />
    <Text style = {{flex: 5}}> Friend Request </Text>
     <Image
      style={{flex: 1, width: 44, height: 44}}
      source={require('../assets/images/accept_green.png')}
     />
     <Image
      style={{flex: 1, width: 44, height: 44, marginHorizontal: 10}}
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
  borderedimage: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth:3,
    borderColor:'blue',
  }
});
