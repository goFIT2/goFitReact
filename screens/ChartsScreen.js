import React from 'react';
import  {View, SectionList, StyleSheet, Header, Text} from 'react-native';
import PureChart from 'react-native-pure-chart';
import ListItem from 'react-native-elements';
import {ProgressRow} from '../components/ExerciseComponent.js'
import { connect } from 'react-redux'

class ChartsScreen extends React.Component {

  constructor(props) {
        super(props);
        this.state= {
          sampleData: [300, 20, 150, 200, 30],
        };
      }
   render() {
     //console.log("OLIVIA'S PRINTING THIS");
     //console.log(this.props);
     return (
       <View>
          <PureChart data={this.state.sampleData} type='line' />
       </View>
     );
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

const mapStateToProps = (state, ownProps) => {
    return {
      exercises: state.progress.exercises[0].data[0].data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChartsScreen)
