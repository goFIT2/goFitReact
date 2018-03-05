import React from 'react'
import { Alert, AlertIOS, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import NewsfeedRow from '../components/NewsfeedRow'

import { connect } from 'react-redux'
import { postStatus } from '../actions/index.js'

class IndividualExerciseScreen extends React.Component {

  constructor(props){
    super(props)
  }

  displayLbsRow = (lbs, exerciseName) => {
    //const exercisesWithoutLbs = ['Chin Ups']
    if (this.props.units[exerciseName].length > 1) {
      return <Text style={{flex:1, alignItems: 'center', textAlign: 'center'}}>{lbs + " " + this.props.units[exerciseName][1]}</Text>
    } else {
      return null
    }
  }

  render() {
    // console.log('OKAY')
    // console.log(this.props.history)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} >
            <Image source={require('../assets/images/weights.png')} style={styles.icon} />
          </View>
          <View style={styles.exerciseLabel}>
            <Text style={styles.exerciseName}>{this.props.exercise}</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <Text style={styles.subheader}>Exercise History</Text>
          <FlatList data={this.props.history} keyExtractor={(item, index) => index} renderItem={({item}) =>

            <View>
              <Text style={{margin: 5, marginTop:10, fontWeight:'bold'}}>{item.timestamp}</Text>
              <View style={{marginHorizontal: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>

              <FlatList data={item.sets} keyExtractor={(item, index) => index} renderItem={(item, index) =>

                <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 20}}>
                    <View style={{flex:1}}>
                        <Text style={styles.rowText}>{item.index+1}</Text>
                    </View>

                   <Text style={{flex:1, alignItems: 'center', textAlign: 'center'}}>{item.item.lbs + " " + this.props.units[this.props.exercise][0]}</Text>

                  {//  <Text style={{flex:1, alignItems: 'center', textAlign: 'center'}}>{item.item.reps + " " + this.props.units[this.props.exercise][1]}</Text>
                }
                {this.displayLbsRow(item.item.reps, this.props.exercise)}
                </View>

              }/>
            </View>

          }/>
        </View>
        <TouchableHighlight onPress={this.share} style={styles.button}>
            <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>SHARE</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let sessions = state.newReducer.users.cvaladez.sessions
  let exercise = state.newReducer.users.cvaladez.chosenExercise
  var history = [] // [{1/1/2000: [sets]}]
  for (s in sessions) {
    var sets = []
    for (e in sessions[s]) {
      if (sessions[s][e].exerciseName == exercise) {
        for (ss in sessions[s][e].sets) {
          if (sessions[s][e].sets[ss].lbs /*&& sessions[s][e].sets[ss].reps*/)
          sets.push(sessions[s][e].sets[ss])
        }
      }
    }
    if (sets.length > 0) {
      var item = {}
      item['timestamp'] = s
      item['sets'] = sets
      history.unshift(item)
    }
  }
  return {
    history: history,
    exercise: exercise,
    units: state.newReducer.units,
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
