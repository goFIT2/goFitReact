import React from 'react';
import {Alert, Dimensions, Image, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';

import CommunityCell from '../components/CommunityCell.js'
import ActivityCell from '../components/ActivityCell.js'
import NewsfeedRow from '../components/NewsfeedRow.js'

import { connect } from 'react-redux'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'goFIT',
    headerTitle: (
      <Image source={require('../assets/images/logo.png')}  style={{resizeMode: 'contain', height:30}}/>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {key:0, icon:'weights', name:'Barbell Bench Press'},
        {key:1, icon:'jumprope', name:'Chin Ups'},
      ]
    };

  }

  componentDidMount() {
    setTimeout(() => {this.scrollView.scrollTo({x: -60}) }, 100)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Quick Add</Text>
        <View style={{marginHorizontal: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} horizontal= {true} decelerationRate={0} snapToInterval={width-120} snapToAlignment={"center"} showsHorizontalScrollIndicator={false} contentInset={{top:0,left:60,bottom:0,right:60}} style={{flex:1}}>
          <FlatList horizontal={true} data={this.state.activities} renderItem={({item}) =>
            <View key={item.key} style={styles.cell}>
              <ActivityCell icon={item.icon} name={item.name} navigation={this.props.navigation} />
            </View>}
          />
        </ScrollView>
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
          <Text style={styles.label}>Fit Feed</Text>
          <View style={{marginHorizontal: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>
          <FlatList data={this.props.newsfeed} renderItem={({item}) => <NewsfeedRow key={item.key} id={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time} likes={item.likes} attachment={item.attachment} />}/>
        </ScrollView>
      </View>
    );
  }

}

const {width} = Dimensions.get('window');

const mapStateToProps = (state, ownProps) => {
  return {
    newsfeed: state.community.newsfeed.slice().sort(function(a,b){return b.key-a.key})
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cell: {
    width: width,
    marginHorizontal: -60,
    alignSelf:'center'
  },
  label: {
    fontWeight: '200',
    fontSize: 18,
    color: 'gray',
    alignSelf: 'center',
    padding: 5
  }
});
