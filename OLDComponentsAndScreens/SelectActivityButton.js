import React from 'react'
import {
    TouchableHighlight,
    StyleSheet,
    View,
    Image,
    Text
    } from 'react-native'

class SelectActivityButton extends React.Component {
    constructor(props){
        super(props)
    }

    getURL = (activityType) => {
        let url = null
        //console.log(activityType)
        switch (activityType){
            case 'Swimming':
                url = require('../assets/images/swimming.png')
                break
            case 'Running':
                url = require('../assets/images/running.png')
                break
            case 'Salad':
                url = require('../assets/images/salad.png')
                break
            case 'Walking':
                url = require('../assets/images/walking.png')
                break
            case 'Biking':
                url = require('../assets/images/biking.png')
                break
            case 'Weights':
                url = require('../assets/images/weights.png')
                break
            case 'Jumprope':
                url = require('../assets/images/jumprope.png')
                break
            case 'Water':
                url = require('../assets/images/water.png')
                break
            default:
                console.log("Didn't pass in the proper activity type")
        }
        return url
    }

    activityPress = (activityType) => {
        console.log(activityType + 'was pressed!')
    }
    render(){
        let imageSource = this.getURL(this.props.activityType)
        return(
            <TouchableHighlight
            style={styles.activityStyle}
            onPress={() => this.activityPress(this.props.activityType)}
            >
            <View style={styles.activityStyle}>
                <Image source={imageSource}
                    style={styles.imageStyle}
                    resizeMode='contain'
                />
                <Text>{this.props.activityType}</Text>
            </View>
        </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    activityStyle: {
        flex: 1, alignItems: 'center'
    },
})

export default SelectActivityButton
