import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent.js'
import { TouchableHighlight, SectionList, 
    View, StyleSheet, Text } from 'react-native'
import SearchExercise from '../components/SearchExercise'
import { connect } from 'react-redux'
import { addSet } from '../actions/index'

class LogProgressScreen extends React.Component {
    static navigationOptions = {
        title: 'myProgress',
    };

    saveButton = () => {
        console.log("save button pressed")
        const temp = { 
            index: 0,
            exercise: 'Barbell Bench Press', 
            data: [
                {
                data: [
                    {num: 5, reps: 3}, {num: 2, reps: 4}
                ],
                }
            ],
        }
        this.props.addSet(temp)
        console.log(this.props.addSet)
    }
    render(){
        console.log("LOG PROGRESS SCREEN")
        return(
            <View style={{flexDirection: 'column', backgroundColor: '#fcfcfc'}}>
                <SearchExercise />
                <SectionList 
                    style={styles.list}
                    renderItem={(item) => <ExerciseComponent 
                            exerciseData={item} 
                            />
                    }
                    sections={this.props.exercises}
                    keyExtractor={(item, index) => index}
                    />
            <TouchableHighlight 
                onPress={this.saveButton}
                style={styles.button}
            >
                <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>SAVE WORKOUT</Text>
            </TouchableHighlight> 
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      exercises: state.progress.exercises
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addSet
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
