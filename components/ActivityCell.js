import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { addExercise } from '../actions/index'

class ActivityCell extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.state = {
            icon: props.icon,
            name: props.name,
            members: props.members
        }
    }

    add = () => {
        timestamp = new Date(Date.now()).toDateString() // only add exercises to today
        this.props.addExercise(this.state.name, timestamp)
        this.props.navigation.navigate('Progress')
    }

    render() {
        let images = {
            biking: require('../assets/images/biking.png'),
            jumprope: require('../assets/images/jumprope.png'),
            running: require('../assets/images/running.png'),
            salad: require('../assets/images/salad.png'),
            swimming: require('../assets/images/swimming.png'),
            walking: require('../assets/images/walking.png'),
            water: require('../assets/images/water.png'),
            weights: require('../assets/images/weights.png'),
        }
        return(
            <View style={styles.cell}>
                <TouchableHighlight onPress={() => this.add()}>
                    <View style={styles.circle} >
                        <Image source={images[this.state.icon]} style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <Text style={styles.name}>{this.state.name}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (exerciseName, timestamp) => dispatch(addExercise(exerciseName, timestamp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCell)

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        borderWidth: 4,
        height: 160,
        width: 160,
        borderRadius: 80,
        justifyContent: 'center',
        borderColor: '#FB6D00'
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    name: {
        fontSize: 25,
        fontWeight: '200',
        margin: 10
    }
});
