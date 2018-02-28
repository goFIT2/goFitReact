import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { connect } from 'react-redux'
import { likeUnlike } from '../actions/index.js'

class NewsfeedRow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      friend: props.friend,
      community: props.community,
      text: props.text,
      time: props.time,
      likes: props.likes,
      attachment: props.attachment
    }
  }

  like = () => {
    // modify the current state first
    newLikes = this.state.likes.slice()
    if (newLikes.indexOf("You") >= 0) {
      newLikes.splice(newLikes.indexOf("You"), 1)
    } else {
      newLikes.push('You')
    }
    this.setState({likes:newLikes})
    // then modify the state on redux
    this.props.likeUnlike(this.state.id)
    // yes i know this is shitty lol -Bryce
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
    let text = this.state.text == '' ? null : (<Text style={styles.content}>{this.state.text}</Text>);
    let attachment = this.state.attachment == '' ? null : (<Text style={styles.attachment}>{this.state.attachment}</Text>);
    return (
      <View style={styles.row}>
        <View>
          <Image source={images[this.state.friend]} style={styles.icon} />
        </View>
        <View style={styles.label}>
          <Text style={styles.smallLabel}>{this.state.community + ' Community • ' + this.state.time}</Text>
          {text}
          {attachment}
          <TouchableHighlight onPress={this.like}>
            <Text style={this.state.likes.indexOf("You") >= 0 ? styles.likeLabelRed : styles.likeLabelGray}>♥ {this.state.likes.length}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.community.newsfeed[1].likes)
  return {
  }
}

// Dummy function for now will use later
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    likeUnlike: (postIndex) => {
      dispatch(likeUnlike(postIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsfeedRow)

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    alignSelf: 'center',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  label: {
    padding: 10,
    flex: 1
  },
  smallLabel: {
    color: 'gray',
    fontSize: 10
  },
  content: {
    paddingVertical: 4
  },
  attachment: {
    color: 'gray',
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 3,
    marginVertical: 4
  },
  likeLabelGray: {
    color: 'gray',
    fontSize: 10
  },
  likeLabelRed: {
    color: 'red',
    fontSize: 10
  }
});
