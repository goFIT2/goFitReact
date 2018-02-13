import React from 'react'

import { View, FlatList, StyleSheet,
        TouchableHighlight, Text } from 'react-native'

import { Entypo } from '@expo/vector-icons'

const data = [ 
    'Barbell Press', 
    'Dumbbell Press',
    'Running', 
    'Bicep Curl', 
    'Barbell Curl',
    'Shoulder Press',
]
{/* <View style={{
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
}}> */}

class SearchExercise extends React.Component {
    render() {
        return (
            <View>
                <View >
                    <Text>
                        This will be the search bar
                    </Text>
                </View>
                <FlatList 
                    data={data}
                    renderItem={({item, separators}) => (
                        <TouchableHighlight
                            onPress={() => console.log(`${item} pressed`)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}
                        >
                            <View> 
                                <Text>{item}</Text>
                            </View> 
                        </TouchableHighlight> 
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