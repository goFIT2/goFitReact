import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { connect } from 'react-redux'
import { switchCommunity } from '../actions/index.js'

class CommunityCell extends React.Component {

  constructor(props) {
    super(props)
    this.detail = this.detail.bind(this)
    this.state = {
      id: props.id,
      icon: props.icon,
      name: props.name,
      members: props.members
    }
  }

  detail = () =>  {
    this.props.switchCommunity(this.state.id)
    this.props.navigation.navigate('IndividualCommunity')
  }

  render() {
    let images = {
      You: require('../assets/images/placeholder.png'),
      Bryce: require('../assets/images/bryce.jpg'),
      Chris: require('../assets/images/chris.jpg'),
      Christina: require('../assets/images/christina.jpg'),
      CJ: require('../assets/images/cj.jpg'),
      Denis: require('../assets/images/denis.jpg'),
      Olivia: require('../assets/images/olivia.jpg')
    }
    var friends = this.state.members.map(function(m, i) {
      return (<Image key={i} source={images[m]} style={styles.smallFriend} />)
    })
    return(
      <View style={styles.cell}>
        <TouchableHighlight onPress={this.detail}>
          <View style={styles.circle} >
            <Image source={this.state.icon} style={styles.icon} />
          </View>
        </TouchableHighlight>
        <Text style={styles.name}>{this.state.name}</Text>
        <View style={{flexDirection:'row'}}>
          {friends}
        </View>
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
    switchCommunity: (index) => {
      dispatch(switchCommunity(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityCell)

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    borderWidth: 3,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    borderColor: '#FB6D00'
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  name: {
    fontWeight: '200',
    margin: 5
  },
  smallFriend: {
    height: 18,
    width: 18,
    borderRadius: 9,
    margin: 1
  }
})