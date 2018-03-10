import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { connect } from 'react-redux'
import { likeUnlike } from '../actions/index.js'

class NewsfeedRow extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
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

  get_time_ago(post_time) {
    seconds = Math.round((Date.now()-this.state.time)/1000)
    if (seconds < 60) {
      return seconds + 's'
    } else if (60 <= seconds && seconds < 3600) {
      return Math.round(seconds/60) + 'm'
    } else if (3600 <= seconds && seconds < 86400) {
      return Math.round(seconds/3600) + 'h'
    } else if (86400 <= seconds && seconds < 604800) {
      return Math.round(seconds/86400) + 'd'
    } else {
      return Math.round(seconds/86400) + 'w'
    }
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
    let community_name = this.props.communities[this.state.community].name
    let time_ago = this.get_time_ago(this.state.time)
    let text = this.state.text == '' ? null : (<Text style={styles.content}>{this.state.text}</Text>);
    let attachment = this.state.attachment == '' ? null : (<Text style={styles.attachment}>{this.state.attachment}</Text>);
    return (
      <View>
        <View style={styles.row}>
          <View>
            <Image source={images[this.state.friend]} style={styles.icon} />
          </View>
          <View style={styles.label}>
            <Text style={styles.smallLabel}>{community_name + ' Community • ' + time_ago}</Text>
            {text}
            {attachment}
            <TouchableHighlight onPress={this.like}>
              <Text style={(this.state.likes == null || this.state.likes.indexOf("You") >= 0)? styles.likeLabelRed : styles.likeLabelGray}>
              ♥ {this.state.likes == null ? 0 : this.state.likes.length}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{margin: 10, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth}}/>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    communities: state.community.communities,
    newsfeed: state.community.newsfeed
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
    fontSize: 13
  },
  content: {
    paddingVertical: 4,
    fontSize: 16
  },
  attachment: {
    color: 'gray',
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 3,
    marginVertical: 4
  },
  likeLabelGray: {
    color: 'gray',
    fontSize: 13
  },
  likeLabelRed: {
    color: 'red',
    fontSize: 13
  }
});
