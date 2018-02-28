import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent.js'
import {
    TouchableHighlight, SectionList,
    View, StyleSheet, Text, FlatList
} from 'react-native'
import SearchExercise from '../components/SearchExercise'
import { connect } from 'react-redux'
import { addSet } from '../actions/index'
import { _ } from 'lodash'

class LogProgressScreen extends React.Component {
    static navigationOptions = {
        title: 'myProgress',
    };

    saveButton = () => {
        //console.log("Save button pressed")
    }
    render() {
        let data = this.props.newReducer.users.cvaladez.sessions.TIMESTAMP1
        
        let mutatedData = [] 
        _.forEach(data, (val, index) => {
            mutatedData.push(val)
        })
        return (
            <View style={{ flexDirection: 'column', backgroundColor: '#fcfcfc' }}>
                <SearchExercise />
                <FlatList
                    style={styles.list}
                    renderItem={(item, index) => {
                        const setIndex = Object.keys(item.item.sets).length
                        return(
                            <ExerciseComponent
                            exerciseData={item}
                            addSetButton={() => this.props.addSet(item.index, setIndex)}
                            />
                        )
                    }
                    }
                    data={mutatedData}
                    keyExtractor={(item, index) => index}
                    extraData={this.props.newReducer}
                />
                <TouchableHighlight
                    onPress={this.saveButton}
                    style={styles.button}
                >
                    <Text style={{ textAlign: 'center', 
                    textAlignVertical: 'center', color: 'white', 
                    fontFamily: 'sf-bold' }}>SAVE WORKOUT</Text>
                </TouchableHighlight>
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
        addSet: (exerciseIndex, setIndex) => dispatch(addSet(exerciseIndex, setIndex))
    }
}


const styles = StyleSheet.create({
    list: {
        marginTop: 100
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
