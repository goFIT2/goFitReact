import React from 'react'

import {
  Dimensions,
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

  toggleAddExercise(item) {
    this.setState({searchText:'', data:[]})
    this.props.addExercise(item)
  }

  setSearchText(text) {
    console.log(text)
    const searchText = text
    this.setState({searchText})
    data = [
      'Barbell Press',
      'Dumbbell Press',
      'Running',
      'Bicep Curl',
      'Barbell Curl',
      'Shoulder Press'
    ]
    let filteredData = this.filterExercises(searchText, data);
    console.log("Filtered data is " + filteredData);
    data = filteredData;
    this.setState({data})
  }

  filterExercises(searchText, exercises) {
    if (searchText == '') {
      return []
    }
    let text = searchText.toLowerCase();
    //let longWords = words.filter(word => word.length > 6);
    return exercises.filter(exercise => exercise.toLowerCase().indexOf(text) >= 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      data: []
    }
  }

  render() {
    return (
      <View style={{width: width, position:'absolute'}}>
        <View>
          <TextInput style={styles.searchBar} value={this.state.searchText} onChangeText={(text) => this.setSearchText(text)} placeholder='Search'/>
        </View>
        <FlatList data={this.state.data} keyExtractor={(item, index) => index} renderItem={({item, separators}) => {
          return (
            <TouchableHighlight style={styles.dropdownItem} onPress={() => this.toggleAddExercise(item)} onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
            <Text style={{fontSize:20, fontWeight:'200'}}>{item}</Text>
            </TouchableHighlight>
          )
        }}/>
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

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  chevron: {
    marginLeft: 3,
    alignSelf: 'stretch',
    marginTop: 6,
    fontSize: 20
  },
  searchBar: {
    fontSize: 20,
    fontWeight: '400',
    height: 50,
    borderWidth: 9,
    borderColor: '#E4E4E4',
    padding: 5
  },
  dropdownItem: {
    backgroundColor:'white',
    padding: 5
  }
})
