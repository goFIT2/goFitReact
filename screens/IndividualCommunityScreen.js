import React from 'react'
import { Alert, AlertIOS, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import NewsfeedRow from '../components/NewsfeedRow'

import { connect } from 'react-redux'
import { postStatus } from '../actions/index.js'

class IndividualCommunityScreen extends React.Component {

  constructor(props){
    super(props)
  }

  postStatus = () => {
    let friend = 'Bryce'
    let community = this.props.community.name
    AlertIOS.prompt('What would you like to say?', null, text => this.props.postStatus(friend, text, community, ''))
  }

  shareProgress() {
    Alert.alert('This should take the user to a screen that lets them choose which progress to share.')
  }

  render() {
    let images = {
      Bryce: require('../assets/images/bryce.jpg'),
      Chris: require('../assets/images/chris.jpg'),
      Christina: require('../assets/images/christina.jpg'),
      CJ: require('../assets/images/cj.jpg'),
      Denis: require('../assets/images/denis.jpg'),
      Olivia: require('../assets/images/olivia.jpg')
    }
    var friends = this.props.community.members.map(function(m, i) {
      return (<Image key={i} source={images[m]} style={styles.smallFriend} />)
    })
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} >
            <Image source={this.props.community.icon} style={styles.icon} />
          </View>
          <View style={styles.communityLabel}>
            <Text style={styles.communityName}>{this.props.community.name}</Text>
            <View style={{flexDirection:'row'}}>
              {friends}
            </View>
          </View>
        </View>
        <View style={{flex:6}}>
          <Text style={styles.subheader}>Community Feed</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight onPress={this.postStatus} style={styles.button}>
              <Text style={styles.buttonText}>Post Status</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.shareProgress} style={styles.button}>
              <Text style={styles.buttonText}>Share Progress</Text>
            </TouchableHighlight>
          </View>
          <FlatList data={this.props.newsfeed.filter(item => item.community == this.props.community.name)} renderItem={({item}) => <NewsfeedRow key={item.key} friend={item.friend} text={item.text} community={item.community} time={item.time} likes={item.likes} attachment={item.attachment} />}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    community: state.community.communities[state.community.chosenCommunity],
    newsfeed: state.community.newsfeed
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postStatus: (friend, text, community, attachment) => {
      dispatch(postStatus(friend, text, community, attachment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualCommunityScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  communityLabel: {
    flex:2,
    padding:10
  },
  communityName: {
    paddingBottom: 10,
    fontSize: 35,
    fontWeight: '200'
  },
  subheader: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '900',
    paddingVertical: 10
  },
  circle: {
    margin: 10,
    marginLeft: 20,
    borderWidth: 3,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    borderColor: '#FB6D00'
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  smallFriend: {
    height: 18,
    width: 18,
    borderRadius: 9,
    margin: 1
  },
  button: {
    flex: 1,
    borderWidth: 1,
    margin: -0.5,
    borderColor: 'white',
    backgroundColor: '#FB6D00'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    padding: 5,
    alignSelf: 'center'
  },
})
