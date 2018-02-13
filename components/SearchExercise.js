import React from 'react'
import SearchBar from 'react-native-searchbar'
import { View, FlatList, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements' 
import { Entypo } from '@expo/vector-icons'

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
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 10,
                            marginBottom: 5,
                        }}>
                            <ListItem
                                title={item}
                                subtitle={'Test'}
                                containerStyle={{ borderBottomWidth: 0 }}
                                chevronColor={'#bdc6cf'}
                            />
                            
                        </View> 
                      )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

export default SearchExercise

const styles = StyleSheet.create({
    chevron: {
        marginLeft: 3,
        alignSelf: 'stretch',
        marginTop: 6,
        fontSize: 20
    },
})