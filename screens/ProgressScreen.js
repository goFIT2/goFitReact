import React from 'react'
import Exercise from '../components/Exercise.js'
import { TouchableHighlight, SectionList, 
    View, StyleSheet, Text } from 'react-native'
import SearchExercise from '../components/SearchExercise'

// const data = {data: [
//     {
//         key: 0, exercises: ['Barbell', 'Triceps'],
//         Barbell: [{num: '0', previous: '20x8', lbs: '25', reps: '6'}],
//         Triceps: [{num: '0', previous: '20x4', lbs: '0', reps: '8'}]
//     },
//         key: 1, exercises: ['Barbell', 'Triceps'],
//         Barbell: [{num: '0', previous: '20x8', lbs: '25', reps: '6'}],
//         Triceps: [{num: '0', previous: '20x4', lbs: '0', reps: '8'}]
// ]
// }

const data2 = [
        {
            exercise: 'Barbell', data: [{num: 5, reps: 3}, {num: 2, reps: 4}]
        },
        {
            exercise: 'Leg Press', data: [{num: 5, reps: 1}, {num: 5, reps: 1}]
        }
    ]


    

class ProgressScreen extends React.Component {

    static navigationOptions = {
        title: 'myProgress',
    };

    render(){

        return(
            <View style={{flexDirection: 'column', backgroundColor: '#fcfcfc'}}>
                <SearchExercise />

                <SectionList 
                    style={styles.list}
                    renderItem={(item) => <Exercise exerciseData={item} />}
                    sections={data2}
                    keyExtractor={(item, index) => index}
                    />
            <TouchableHighlight 
                onPress={() => this.setState({data: []})}
                style={styles.button}
            >
                <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>SAVE WORKOUT</Text>
            </TouchableHighlight> 
            </View>
        )
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

export default ProgressScreen
