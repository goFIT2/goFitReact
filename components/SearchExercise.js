import React from 'react'

import {
    View,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    Text,
    TextInput
} from 'react-native'
import {SearchBar} from 'react-native-elements'

import {Entypo} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addExercise} from '../actions/index'

const data = []
{/* <View style={{
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
}}> */
}

class SearchExercise extends React.Component {
    setSearchText(text) {
        console.log(text)
        const searchText = text
        this.setState({searchText});
        data = [
            'Barbell Press',
            'Dumbbell Press',
            'Running',
            'Bicep Curl',
            'Barbell Curl',
            'Shoulder Press'
        ];
        let filteredData = this.filterExercises(searchText, data);
        console.log("Filtered data is " + filteredData);
        data = filteredData;
        this.setState({data})
    }

    filterExercises(searchText, exercises) {
        let text = searchText.toLowerCase();
        //let longWords = words.filter(word => word.length > 6);
        return exercises.filter(exercise => exercise.toLowerCase().indexOf(text) >= 0);
    }

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data: [
                'Barbell Press',
                'Dumbbell Press',
                'Running',
                'Bicep Curl',
                'Barbell Curl',
                'Shoulder Press'
            ]
        };
    }


    render() {
        return (
            <View>
                <View >
                    <TextInput
                        style={styles.searchBar}
                        value={this.state.searchText}
                        onChangeText={(text) => this.setSearchText(text)}
                        placeholder='Search'/>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item, separators}) => {
                    console.log(item)
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.addExercise(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View>
                                <Text>{item}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                }}
                    keyExtractor={(item, index) => index}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {newReducer: state.newReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExercise: (exerciseName) => dispatch(addExercise(exerciseName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchExercise)

const styles = StyleSheet.create({
    chevron: {
        marginLeft: 3,
        alignSelf: 'stretch',
        marginTop: 6,
        fontSize: 20
    },
    searchBar: {
        fontSize: 16,
        height: 40,
        borderWidth: 9,
        borderColor: '#E4E4E4'
    }
})
