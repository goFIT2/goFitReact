import React from 'react'
import SearchBar from 'react-native-searchbar'
import { View } from 'react-native'


const data = [ 
    'Barbell Press', 
    'Dumbbell Press',
    'Running', 
    'Bicep Curl', 
    'Barbell Curl',
    'Shoulder Press',
]

class SearchExercise extends React.Component {
    render() {
        return (
            <View>
                <SearchBar 
                    data={data}
                    placeholder={'Add An Exercise'}
                    showOnLoad={true}
                    fontFamily='sf-light'
                    hideBack={true}
                    />
            </View>
        )
    }
}

export default SearchExercise