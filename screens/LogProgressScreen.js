import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent.js'
import { Dimensions, ScrollView, TouchableHighlight, SectionList, View, StyleSheet, Text, FlatList } from 'react-native'
import SearchExercise from '../components/SearchExercise'
import { connect } from 'react-redux'
import { addSet, lbsInputChange, repsInputChange, addSession } from '../actions/index'
import { _ } from 'lodash'
import { bindActionCreators } from 'redux'

class LogProgressScreen extends React.Component {
  static navigationOptions = {
    title: 'Progress',
  };

  shareButton = () => {
    console.log("Share button pressed");
    this.props.navigation.navigate('ShareExerciseProgressScreen')
  }

  componentDidMount() {
    let data = this.props.newReducer.users.cvaladez.sessions

    if (!data[new Date(Date.now()).toDateString()]) {
      console.log('ADDING TODAYS SESSION')
      this.props.addSession(new Date(Date.now()).toDateString())
    }

    setTimeout(() => {this.scrollView.scrollToEnd() }, 100)
  }

  render() {
    //let data = this.props.newReducer.users.cvaladez.sessions.TIMESTAMP1
    let data = this.props.newReducer.users.cvaladez.sessions

    var sessions = []
    var timestamps = []

    for (var d in data) {
      let mutatedData = []
      _.forEach(data[d], (val, index) => {
        val['timestamp'] = d
        mutatedData.push(val)
      })
      sessions.push(mutatedData)
      timestamps.push(d)
    }

    return (
      <View style={{ flexDirection: 'column', backgroundColor: '#fcfcfc', height: height-120 }}>

        <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} horizontal= {true} decelerationRate={0} snapToInterval={width-50} snapToAlignment={"center"} showsHorizontalScrollIndicator={false} contentInset={{top:0,left:25,bottom:0,right:25}} style={{flex:1}}>

          <FlatList horizontal={true} data={sessions} keyExtractor={(item, index) => index} renderItem={({item, index}) =>

            <View>
              <Text style={styles.timestamp}>{timestamps[index]}</Text>
              <View style={{margin: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>
              <FlatList style={styles.list} data={item} extraData={this.props.newReducer} showsVerticalScrollIndicator={false} keyExtractor={(item, index) => index} renderItem={(item, index) => {
                const setIndex = Object.keys(item.item.sets).length
                return (<ExerciseComponent exerciseData={item} addSetButton={() => this.props.addSet(item.index, setIndex, item.item.timestamp)} lbsInputChange={this.props.lbsInputChange} repsInputChange={this.props.repsInputChange} navigation={this.props.navigation}/>)
              }}/>
            </View>

          }/>

        </ScrollView>

        <TouchableHighlight onPress={this.shareButton} style={styles.button}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold' }}>SHARE WORKOUT</Text>
        </TouchableHighlight>
        <SearchExercise />

      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    newReducer: state.newReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSet: (exerciseIndex, setIndex, timestamp) => dispatch(addSet(exerciseIndex, setIndex, timestamp)),
    addSession: (timestamp) => dispatch(addSession(timestamp)),
    lbsInputChange: bindActionCreators(lbsInputChange, dispatch),
    repsInputChange: bindActionCreators(repsInputChange, dispatch)
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  timestamp: {
    marginTop: 60,
    color: 'gray',
    alignSelf: 'center'
  },
  list: {
    width: width-50
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

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogProgressScreen)
