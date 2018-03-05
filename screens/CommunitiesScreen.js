import React from 'react'
import { Alert, ScrollView, StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import CommunityCell from '../components/CommunityCell.js'

import { connect } from 'react-redux'

class CommunitiesScreen extends React.Component {

  static navigationOptions = {
    title: 'Communities',
  }

  constructor(props) {
    super(props)
  }

  add = () => {
    this.props.navigation.navigate('AddCommunity')
  }

  render() {
    var communities = this.props.communities.map(function(c, i) {
      if (i % 2 == 0) {
        coms = this.props.communities
        if (i != coms.length - 1) {
          return (
            <View key={i} style={styles.row}>
              <CommunityCell id={i} icon={coms[i].icon} name={coms[i].name} members={coms[i].members} navigation={this.props.navigation} />
              <CommunityCell id={i+1} icon={coms[i+1].icon} name={coms[i+1].name} members={coms[i+1].members} navigation={this.props.navigation}/>
            </View>
          )
        } else {
          return (
            <View key={i} style={styles.row}>
              <CommunityCell id={i} icon={coms[i].icon} name={coms[i].name} members={coms[i].members} navigation={this.props.navigation}/>
            </View>
          )
        }
      }
    }, this)
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.alertBar} onPress={() => this.add()}>
          <Text style={styles.alertText}>ADD NEW COMMUNITY</Text>
        </TouchableHighlight>
        <ScrollView>
          {communities}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state.community.communities)
  return {
    communities: state.community.communities
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  alertBar: {
    backgroundColor: '#FB6D00',
    height: 30
  },
  alertText: {
    alignSelf: 'center',
    color: 'white',
    padding: 7,
    fontWeight: 'bold'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 160
  },
})
