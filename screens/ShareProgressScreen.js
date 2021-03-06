
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
      exercises: this.props.exercises
    }
  }

  share = () => {
    var selected = []
    for (s in this.state.selected) {
      if (this.state.selected[s]) {
        selected.push(s.toLowerCase())
      }
    }
    if (selected.length == 0 && this.state.text) {
      let friend = 'You'
      let text = this.state.text
      let community = this.props.community.key
      let attachment = ''
      this.props.postStatus(friend, text, community, attachment)
      this.props.navigation.goBack()
    }
    else if (selected.length > 0) {
      let friend = 'You'
      let text = this.state.text ? this.state.text : ''
      let community = this.props.community.key
      let attachment = friend + ' completed ' + selected.join(', ') + ' today!'
      this.props.postStatus(friend, text, community, attachment)
      this.props.navigation.goBack()
    } else {
      Alert.alert('Please say something or choose an exercise to share.')
    }
  }

  toggleExercise(i) {
    var newSelected = Object.assign({}, this.state.selected);
    newSelected[i] = !newSelected[i]
    this.setState({selected:newSelected})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.label}>What would you like to say?</Text>
        <TextInput style={styles.textinput} onChangeText={(text) => this.setState({text})} placeholder='Say something...' autoGrow={true} multiline = {true} blurOnSubmit={true} returnKeyType='done'/>
        <Text style={styles.label}>What would you like to share?</Text>
        <FlatList data={this.state.exercises} extraData={this.state.selected} keyExtractor={(item, index) => index} renderItem={({item}) =>
          <TouchableHighlight onPress={() => this.toggleExercise(item.exerciseName)} style={this.state.selected[item.exerciseName] ? styles.selectedRow : styles.row}>
            <Text style={this.state.selected[item.exerciseName] ? styles.selectedExercise : styles.exercise}>{item.exerciseName}</Text>
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
  exercises = []
  todays_session = state.newReducer.users.cvaladez.sessions[new Date(Date.now()).toDateString()]
  for (i in todays_session) {
    if (!selected.hasOwnProperty(todays_session[i].exerciseName)) {
      selected[todays_session[i].exerciseName] = false
      exercises.push(todays_session[i])
    }
  }
  return {
    exercises: exercises,
    selected: selected,
    community: state.community.communities[state.community.chosenCommunity]
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
