import React from 'react'
import { Alert, AlertIOS, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import NewsfeedRow from '../components/NewsfeedRow'

import { connect } from 'react-redux'
import { postStatus } from '../actions/index.js'

class IndividualExerciseScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      exerciseName: 'Barbell Press'
    }
  }

  render() {
    console.log('OKAY')
    console.log(this.props.history)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} >
            <Image source={require('../assets/images/weights.png')} style={styles.icon} />
          </View>
          <View style={styles.exerciseLabel}>
            <Text style={styles.exerciseName}>{this.state.exerciseName}</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <Text style={styles.subheader}>Exercise History</Text>
          <FlatList data={this.props.history} keyExtractor={(item, index) => index} renderItem={({item}) =>

            <View>
              <Text style={{margin: 5, marginTop:10, fontWeight:'bold'}}>{item.timestamp}</Text>
              <View style={{marginHorizontal: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>

              <FlatList data={item.sets} keyExtractor={(item, index) => index} renderItem={(item, index) =>

                <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
                    <View style={{flex:1}}>
                        <Text style={styles.rowText}>{item.index+1}</Text>
                    </View>
                    <Text style={{flex:1, alignItems: 'center', textAlign: 'center'}}>{item.item.lbs + ' lbs'}</Text>
                    <Text style={{flex:1, alignItems: 'center', textAlign: 'center'}}>{item.item.reps + ' reps'}</Text>
                </View>

              }/>
            </View>

          }/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let sessions = state.newReducer.users.cvaladez.sessions
  var history = [] // [{1/1/2000: [sets]}]
  for (s in sessions) {
    var sets = []
    for (e in sessions[s]) {
      if (sessions[s][e].exerciseName == 'Barbell Press') {
        for (ss in sessions[s][e].sets) {
          sets.push(sessions[s][e].sets[ss])
        }
      }
    }
    if (sets.length > 0) {
      var item = {}
      item['timestamp'] = s
      item['sets'] = sets
      history.push(item)
    }
  }
  return {
    history: history
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualExerciseScreen)

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
  exerciseLabel: {
    flex:2,
    padding:10
  },
  exerciseName: {
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
  rowText: {
      fontFamily: 'sf-bold',
      fontSize: 14,
      alignSelf: 'center',
  },
})
