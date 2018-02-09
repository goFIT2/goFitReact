import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent.js'
import { TouchableHighlight, SectionList, 
    View, StyleSheet, Text } from 'react-native'
import SearchExercise from '../components/SearchExercise'
import { connect } from 'react-redux'


class LogProgressScreen extends React.Component {
    static navigationOptions = {
        title: 'myProgress',
    };

    render(){
        console.log("REDUX")
        console.log(this.props.exercises)
        return(
            <View style={{flexDirection: 'column', backgroundColor: '#fcfcfc'}}>
                <SearchExercise />
                <SectionList 
                    style={styles.list}
                    renderItem={(item) => <ExerciseComponent exerciseData={item} />}
                    sections={this.props.exercises}
                    keyExtractor={(item, index) => index}
                    />
            <TouchableHighlight 
                onPress={() => console.log("Button pressed")}
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
      exercises: state.exercises
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
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
        justifyContent: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogProgressScreen)