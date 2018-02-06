import React from 'react'
import SearchBar from 'react-native-searchbar'
import { View } from 'react-native'

class SearchExercise extends React.Component {

    render() {
        return (
            <View>
                <SearchBar 
                    data={[]}
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