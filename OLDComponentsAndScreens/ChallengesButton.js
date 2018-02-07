import React from 'react';
import { View, TouchableHighlight, Image, Text, StyleSheet } from 'react-native'

class ChallengesButton extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props.whichOne)
        console.log(this.props.imageURL)
        this.state = { 
            counter: 0
        }
    }


    pressedButton = () => { 
        this.setState({counter: this.state.counter + 1 })
        console.log(this.state.counter)
    }

    render(){
    //     let imageURL = ''
    //     let text = ''
    //     if (this.props.whichOne === 'challenges'){
    //         imageURL = 
    //         text = 'challenges'
    //     }
    //     else if (this.props.whichOne === 'social'){
    //         imageURL = '../assets/images/social_blue.png'
    //         text = 'social'
    //    }
    //    console.log(imageURL)
        return(
            <View> 
                <TouchableHighlight onPress={this.pressedButton}> 
                    <Image source={require('../assets/images/challenges_blue.png')}
                        style={styles.image} /> 
                </TouchableHighlight> 
                <Text style={styles.text}>{this.props.text}</Text> 
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    image: {
      alignSelf: 'center'
    },
    text: {
        alignSelf: 'center'
    }
  });

export default ChallengesButton
