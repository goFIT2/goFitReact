import React from 'react'
import { Alert, FlatList, StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native'

import { connect } from 'react-redux'
import { postStatus } from '../actions/index.js'

class ShareProgressScreen extends React.Component {

  static navigationOptions = {
    title: 'Share Progress',
  }

  constructor(props) {
    super(props)
    this.state = {
      text: null,
      selected: this.props.selected,
      selectedCommunity: this.props.selectedCommunity,
      exercises: this.props.exercises,
      communities: this.props.communities,
    }
  }

  share = () => {
    //console.log("About to share!")
    var selected = []
    var selectedCommunity = []
    var friend = ''
    var text = ''
    var community = ''
    var attachment = ''
    for (s in this.state.selected) {
      if (this.state.selected[s]) {
        selected.push(s.toLowerCase())
      }
    }
    for (c in this.state.selectedCommunity) {
      if (this.state.selectedCommunity[c]) {
        //console.log("About to push" + c);
        selectedCommunity.push(c.toLowerCase())
      }
    }
    //console.log(selectedCommunity)
    if (selected.length == 0 && this.state.text) {
      friend = 'You'
      text = this.state.text
      attachment = ''
    }
    else if (selected.length > 0) {
      friend = 'You'
      text = this.state.text ? this.state.text : ''
      attachment = friend + ' completed ' + selected.join(', ') + ' today!'
    } else {
      Alert.alert('Please say something or choose an exercise to share.')
      return;
    }
    if (selectedCommunity.length > 0) {
      let allCommunities = this.state.communities

      selectedCommunity.map(c => {
        allCommunities.map(curCommunity => {
          if (c === curCommunity.name.toLowerCase()) {
            community = curCommunity.key;
          }
        })
      })
    } else {
      Alert.alert('Please choose a community.')
      return;
    }
    this.props.postStatus(friend, text, community, attachment)
    this.props.navigation.goBack()
  }

  toggleExercise(i) {
    var newSelected = Object.assign({}, this.state.selected);
    newSelected[i] = !newSelected[i]
    this.setState({selected:newSelected})
  }

  toggleCommunity(i) {
    var newSelected = Object.assign({}, this.state.selectedCommunity);
    //console.log("Toggling")
    //console.log(i)
    newSelected[i] = !newSelected[i]
    //console.log(newSelected[i])
    this.setState({selectedCommunity:newSelected})
  }

  render() {
    //console.log("COMMUNITIES" + this.state.communities);
    return (
      <View style={{flex: 1}}>
        <Text style={styles.label}>What would you like to say?</Text>
        <TextInput style={styles.textinput} onChangeText={(text) => this.setState({text})} placeholder='Say something...' autoGrow={true} multiline = {true} returnKeyType='done'/>
        <Text style={styles.label}>What would you like to share?</Text>
        <FlatList data={this.state.exercises} extraData={this.state.selected} keyExtractor={(item, index) => index} renderItem={({item}) =>
          <TouchableHighlight onPress={() => this.toggleExercise(item.exerciseName)} style={this.state.selected[item.exerciseName] ? styles.selectedRow : styles.row}>
            <Text style={this.state.selected[item.exerciseName] ? styles.selectedExercise : styles.exercise}>{item.exerciseName}</Text>
          </TouchableHighlight>
        }/>
        <Text style={styles.label}>Who do you want to share with?</Text>
        <FlatList data={this.state.communities} extraData={this.state.selectedCommunity} keyExtractor={(item, index) => index} renderItem={({item}) =>
          <TouchableHighlight onPress={() => this.toggleCommunity(item.name)} style={this.state.selectedCommunity[item.name] ? styles.selectedRow : styles.row}>
            <Text style={this.state.selectedCommunity[item.name] ? styles.selectedExercise : styles.exercise}>{item.name}</Text>
          </TouchableHighlight>
        }/>
        <TouchableHighlight onPress={this.share} style={styles.button}>
            <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>POST</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  selected = {}
  selectedCommunity = {}

  exercises = []
  communities = []

  todays_session = state.newReducer.users.cvaladez.sessions[new Date(Date.now()).toDateString()]
  for (i in todays_session) {
    if (!selected.hasOwnProperty(todays_session[i].exerciseName)) {
      selected[todays_session[i].exerciseName] = false
      exercises.push(todays_session[i])
    }
  }

  allCommunities = state.community.communities
  for (i in allCommunities) {
    if (!selectedCommunity.hasOwnProperty(allCommunities[i].name)) {
      selectedCommunity[allCommunities[i].name] = false
      communities.push(allCommunities[i])
    }
  }
  // console.log("COMMUNITIES IS ")
  // console.log(communities);

  return {
    exercises: exercises,
    selected: selected,
    selectedCommunity: selectedCommunity,
    communities: communities,
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

export default connect(mapStateToProps, mapDispatchToProps)(ShareProgressScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  exercise: {
    fontWeight: '100'
  },
  selectedExercise: {
    fontWeight: '900',
    color: 'white'
  },
  community: {
    fontWeight: '100'
  },
  selectedCommunity: {
    fontWeight: '900',
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    padding: 10
  },
  selectedRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    backgroundColor: '#FB6D00'
  },
  textinput: {
    fontSize: 15,
    fontWeight: '400',
    //color: '#FB6D00',
    padding: 5,
    minHeight: 100,
    backgroundColor: 'white'
  },
  label: {
    fontWeight: '200',
    fontSize: 20,
    padding: 5
  },
  button: {
      zIndex: 5,
      backgroundColor: '#2b2b2b',
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      alignItems: 'center',
      borderRadius: 5,
      justifyContent: 'center',
      margin: 5
  }
})
