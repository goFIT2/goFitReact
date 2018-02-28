import React from 'react'

import { View, FlatList, StyleSheet,
        TouchableHighlight, Text, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addSet } from '../actions/index'

const data = [

]
{/* <View style={{
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
}}> */}



class SearchExercise extends React.Component {

  setSearchText(event) {
    let searchText = event.nativeEvent.text;
    this.setState({searchText});
    data = [  'Barbell Press','Dumbbell Press','Running', 'Bicep Curl','Barbell Curl', 'Shoulder Press'];
    let filteredData = this.filterExercises(searchText, data);
    //console.log("Filtered data is " + filteredData);
    data = filteredData;
  }

filterExercises(searchText, exercises) {
  let text = searchText.toLowerCase();
  //let longWords = words.filter(word => word.length > 6);
  return exercises.filter(exercise => exercise.toLowerCase().indexOf(text) >= 0);
}


  constructor(props) {
        super(props);
        this.state= {
          searchText: '',
          data: [  'Barbell Press','Dumbbell Press','Running', 'Bicep Curl','Barbell Curl', 'Shoulder Press'],
        };
      }
    render() {
        return (
            <View>
                <View >
                <TextInput
                  style={styles.searchBar}
                  value={this.state.searchText}
                  onChange={this.setSearchText.bind(this)}
                  placeholder='Search' />

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

//export default SearchExercise
const mapStateToProps = (state) => {
    return {
      exercises: state.progress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addSet: (index) => dispatch(addSet(index))
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
      flex: .1,
      borderWidth: 9,
      borderColor: '#E4E4E4',
    },
})
