import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class SocialCell extends React.Component {

    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
        this.state = {
            name: props.name
        }
    }
    
    detail() {
        Alert.alert('You chose your friend ' + this.state.name + '!')
    }

    render() {
        let images = {
            Bryce: require('../assets/images/bryce.jpg'),
            Chris: require('../assets/images/chris.jpg'),
            Christina: require('../assets/images/christina.jpg'),
            CJ: require('../assets/images/cj.jpg'),
            Denis: require('../assets/images/denis.jpg'),
            Olivia: require('../assets/images/olivia.jpg')
        }
        return(
            <View style={styles.row}>
                <View style={{flex:1}}>
                    <TouchableHighlight onPress={this.detail}>
                        <Image source={images[this.state.name]} style={styles.button} />
                    </TouchableHighlight>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text>{this.state.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 160
    },
    button: {
        borderWidth: 2,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: '#00FFFF',
        alignSelf: 'center'
    }
});

export default SocialCell
