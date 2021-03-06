import React from 'react'
import { Alert, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { WebBrowser } from 'expo'

import { connect } from 'react-redux'
import { createCommunity, postStatus } from '../actions/index.js'

class AddCommunityScreen extends React.Component {

  constructor(props) {
    super(props)
    this.create = this.create.bind(this)
    this.checkValues = this.checkValues.bind(this)
    this.state = {
      name: null,
      friends: {Bryce: false, Chris: false, Christina: false, CJ: false, Denis: false, Olivia: false}
    }
  }

  checkValues() {
    var members = []
    for (f in this.state.friends) {
      if (this.state.friends[f]) {
        members.push(f)
      }
    }
    return (this.state.name && members.length > 0)
  }

  create() {
    var members = ['You']
    //console.log(members)
    for (f in this.state.friends) {
      if (this.state.friends[f]) {
        members.push(f)
      }
    }
    //console.log(members)
    if (this.checkValues()) {
      //console.log(members)
      this.props.createCommunity(this.state.name, members)
      this.props.postStatus('You', '', this.props.newCommunityIndex, 'You created the ' + this.state.name + ' community!')
      this.props.navigation.goBack()
    }
  }

  toggleMember(f) {
    var newFriends = this.state.friends
    newFriends[f] = !newFriends[f]
    this.setState({friends:newFriends})
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
    var friends = Object.keys(this.state.friends).map(function(f, i) {
      return (
        <TouchableHighlight key={i} onPress={() => this.toggleMember(f)} underlayColor={'gray'}>
        <View>
        <Image source={images[f]} style={this.state.friends[f] ? styles.friendIcon : styles.friendIconHidden}/>
        <Text style={this.state.friends[f] ? styles.friendName : styles.friendNameHidden}>{f}</Text>
        </View>
        </TouchableHighlight>
      )
    }, this)
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset={0}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text}>the</Text>
        <TextInput style={styles.textinput} onChangeText={(name) => this.setState({name})} placeholder='goFIT' autoCapitalize='none' autoCorrect={false} returnKeyType='done'/>
        <Text style={styles.text}>community with</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {friends}
        </ScrollView>
        <TouchableHighlight onPress={this.create} style={{marginTop:15}}>
          <Text style={this.checkValues() ? styles.button : styles.buttonGray}>Create Community</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    newCommunityIndex: state.community.communities.length
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCommunity: (name, members) => {
      dispatch(createCommunity(name, members))
    },
    postStatus: (friend, text, community, attachment) => {
      dispatch(postStatus(friend, text, community, attachment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommunityScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  text: {
    fontSize: 50,
    fontWeight: '900'
  },
  textinput: {
    fontSize: 45,
    fontWeight: '400',
    color: '#FB6D00'
  },
  button: {
    color: '#0076FF',
    fontSize: 30,
    fontWeight: '900'
  },
  buttonGray: {
    color: 'gray',
    fontSize: 30,
    fontWeight: '900'
  },
  friendIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5
  },
  friendIconHidden: {
    opacity: 0.3,
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5
  },
  friendName: {
    fontSize: 10,
    alignSelf: 'center'
  },
  friendNameHidden: {
    opacity: 0.5,
    fontSize: 10,
    alignSelf: 'center'
  },

})
