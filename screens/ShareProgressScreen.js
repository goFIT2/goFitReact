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
      progress: this.props.progress
    }
  }

  share = () => {
    var selected = []
    for (s in this.state.selected) {
      if (this.state.selected[s]) {
        selected.push(s.toLowerCase())
      }
    }
    if (selected.length > 0) {
      let friend = 'You'
      let text = this.state.text ? this.state.text : ''
      let community = this.props.community.name
      let attachment = friend + ' completed ' + selected.join(', ') + ' today!'
      this.props.postStatus(friend, text, community, attachment)
      this.props.navigation.goBack()
    } else {
      Alert.alert('Please choose at least one exercise to share.')
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
        <TextInput style={styles.textinput} onChangeText={(text) => this.setState({text})} placeholder='Say something...' autoGrow={true} multiline = {true}/>
        <Text style={styles.label}>What would you like to share?</Text>
        <FlatList data={this.state.progress} extraData={this.state.selected} keyExtractor={(item, index) => index} renderItem={({item}) =>
          <TouchableHighlight key={item.index} onPress={() => this.toggleExercise(item.exercise)} style={styles.row}>
            <Text style={this.state.selected[item.exercise] ? styles.selected : styles.exercise}>{item.exercise}</Text>
          </TouchableHighlight>
        }/>
        <TouchableHighlight onPress={this.share} style={styles.button}>
            <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>SHARE PROGRESS</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  selected = {}
  for (i in state.progress) {
    selected[state.progress[i].exercise] = false
  }
  return {
    progress: state.progress,
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
  selected: {
    fontWeight: '900'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    padding: 10
  },
  textinput: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FB6D00',
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
