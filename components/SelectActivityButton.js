import React from 'react'
import { 
    TouchableHighlight, 

    } from 'react-native'

const imageLinks = {
    Swimming: '../assets/images/swim.png', 
    Running : '../assets/images/run.png',
    Salad: '../assets/images/salad.png',
    Walking: '../assets/images/footsteps.png',
    Biking: '../assets/images/bike.png',
    Weights: '../assets/images/weights.png',
    Jumprope: '../assets/images/jumprope.png',
    Water: '../assets/images/water.png'
}
    
class SelectActivityButton extends React.Component {
    constructor(props){
        super(props)
    }

    getURL(activityType) {
        let url = ''
        switch (activityType){
            case 'Swimming':
                url = '../assets/images/swim.png'
            case 'Running':
                url = '../assets/images/run.png'
            case 'Salad':
                url = '../assets/images/salad.png' 
            case 'Walking':
                url = '../assets/images/footsteps.png' 
            case 'Biking':
                url = '../assets/images/bike.png'
            case 'Weights':
                url = '../assets/images/weights.png'
            case 'Jumprope':
                url = '../assets/images/jumprope.png'
            case 'Water':
                url = '../assets/images/water.png'
            default:
                console.log("Didn't pass in the proper activity type")
        }
        console.log("URL")
        console.log(url)
        return require(url) 
    }

    render(){
        let imageSource = getURL(this.props.activityType)
        return(
            <TouchableHighlight
            style={styles.activityStyle}
            onPress={this.activityPress}
            >   
            <View> 
                <Image source={imageSource}
                    style={styles.imageStyle}
                    resizeMode='contain'
                />
                <Text>Swimming</Text>
            </View> 
        </TouchableHighlight>
        )
    }
}

export default SelectActivityButton