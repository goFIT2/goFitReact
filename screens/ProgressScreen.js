import React from 'react'
import Exercise from '../components/Exercise.js'
import { SectionList, View } from 'react-native'

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
            <View>
                <SectionList 
                    renderItem={() => <Exercise />}
                    sections={data}
                    />
                <Exercise />
            </View> 
        )
    }
}

export default ProgressScreen