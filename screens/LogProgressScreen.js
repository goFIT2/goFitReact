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
        console.log(data)
        
        let mutatedData = [] 
        _.forEach(data, (val, index) => {
            console.log(val)
            mutatedData.push(val)
        })
        console.log(mutatedData)
        console.log('mutatedData')
        return (
            <View style={{ flexDirection: 'column', backgroundColor: '#fcfcfc' }}>
                <SearchExercise />
                <FlatList
                    style={styles.list}
                    renderItem={(item, index) => <ExerciseComponent
                        exerciseData={item}
                        addSetButton={() => console.log('addset pressed')}
                    />
                    }
                    data={mutatedData}
                    keyExtractor={(item, index) => index}
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
        exercises: state.progress,
        newReducer: state.newReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSet: (index) => dispatch(addSet(index))
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
