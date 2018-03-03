import React from 'react'
import {  TouchableHighlight, View, Text,
    TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { _ } from 'lodash'

import { connect } from 'react-redux'
import { switchExercise } from '../actions/index.js'

const ExerciseTitle = (props) => {
    function goToIndividualExerciseScreen() {
      props.switchExercise(props.exerciseName)
      props.navigation.navigate('IndividualExercise')
    }
    return (
        <TouchableOpacity style={styles.title} onPress={() => goToIndividualExerciseScreen()}>
            <Text style={styles.titleText}>{props.exerciseName}</Text>
            <Entypo name='chevron-right' style={styles.chevron} />
        </TouchableOpacity>
    )
}

const ColumnHead = () => {
    // <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
    // <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>Previous</Text>
    // </View>

    return(
        <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.columnText1}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>#</Text>
            </View>

            <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>lbs</Text>
            </View>
            <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>reps</Text>
            </View>
        </View>
    )
}

//Coontains callback for whenever state changes, handled by the parent.
const ProgressRow = (props) => {
    const { exerciseIndex, setIndex, lbs, reps, lbsInputChange, repsInputChange, timestamp } = props //Indexed from 0, make sure to increment
    // console.log(props)
    // console.log(`exerciseIndex:${exerciseIndex} index:${setIndex}`)

    // <View style={[styles.columnText1, styles.progressRow, {borderLeftWidth: 0}]}>
    // <Text style={styles.rowText}>{props.item.num}</Text>
    // </View>

    return(
        <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
            <View style={[styles.columnText1, styles.progressRow]}>
                <Text style={styles.rowText}>{setIndex + 1}</Text>
            </View>
            <TextInput
                onChangeText={(text) => lbsInputChange(exerciseIndex, setIndex, text, timestamp)}
                style={[styles.columnText1, styles.progressRow,
                        {borderLeftWidth: 0, alignItems: 'center',
                        textAlign: 'center'}]}
                value={lbs.toString()}
                placeholder='0'
                keyboardType='numeric'
            />
            <TextInput
                onChangeText={(text) => repsInputChange(exerciseIndex, setIndex, text, timestamp)}
                style={[styles.columnText1, styles.progressRow,
                    {borderLeftWidth: 0, alignItems: 'center',
                    textAlign: 'center'
                }]}
                value={reps.toString()}
                placeholder='0'
                keyboardType='numeric'
                />
        </View>
    )
}


const AddSetButton = (props) => {
    return(
        <TouchableHighlight
            onPress={() => props.addSetButton()}
            style={styles.button}
        >
            <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>ADD SET</Text>
        </TouchableHighlight>
    )
}

const ExerciseComponent = (props) => {
    let mutatedData = []
    _.forEach(props.exerciseData.item.sets, (val, index) => {
        mutatedData.push({ data: val })
    })

    const { addSetButton, exerciseData, lbsInputChange, repsInputChange, navigation } = props
    const { index } = exerciseData
    const { exerciseName } = exerciseData.item
    const { switchExercise } = props

    return (
        <View style={styles.card}>
            <ExerciseTitle exerciseName={exerciseName} navigation={navigation} switchExercise={switchExercise} />
            <FlatList
                renderItem={(item) => {
                    return (
                        <ProgressRow
                            exerciseIndex={index}
                            setIndex={item.index}
                            lbs={item.item.data.lbs}
                            reps={item.item.data.reps}
                            lbsInputChange={lbsInputChange}
                            repsInputChange={repsInputChange}
                            timestamp={exerciseData.item.timestamp}
                        />
                    )
                }
                }
                ListHeaderComponent={ColumnHead}
                ListFooterComponent={() => {
                    return(
                        <AddSetButton addSetButton={addSetButton}
                        />
                    )
                }}
                data={mutatedData}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchExercise: (name) => {
      dispatch(switchExercise(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseComponent)

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderColor: '#ACACAC',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowOffset: {  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: .1,
    },
    title: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 5,

    },
    titleText: {
        fontFamily: 'sf-heavy',
        fontSize: 25,

    },
    rowText: {
        fontFamily: 'sf-bold',
        fontSize: 14,
        alignSelf: 'center'
    },
    chevron: {
        marginLeft: 3,
        alignSelf: 'stretch',
        marginTop: 6,
        fontSize: 20
    },
    chart: {
        flexDirection: 'row',
        flex: 1
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    columnText1: {
        borderColor: '#D8D8D8',
        borderWidth: 1,
        flex: 1
    },
    progressRow: {
        borderTopWidth: 0
    },
    headerColumnBox: {
        borderColor: '#D8D8D8'
    },
    progressBox: {
        borderColor: '#D8D8D8',
        borderTopWidth: 0
    },
    button: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FB6D00',
        marginBottom: 10
    },
})
