import React from 'react'
import Exercise from '../components/Exercise.js'
import { TouchableHighlight, SectionList, 
    View, StyleSheet, Text } from 'react-native'
import SearchExercise from '../components/SearchExercise'

const data = [
    {
        key: '0', data: [{num: 'Barbell', reps: '10'}]
    },
    {    
        key: '01', data: [{num:'bae', reps:10 }]
    }
    ]

class ProgressScreen extends React.Component {

    render(){
        return(
            <View style={{flexDirection: 'column', backgroundColor: '#fcfcfc', justifyContent: 'space-between'}}>
                <SearchExercise />

                <SectionList 
                    style={styles.list}
                    renderItem={() => <Exercise />}
                    sections={data}
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