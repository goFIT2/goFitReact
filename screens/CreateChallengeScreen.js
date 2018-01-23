import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    SegmentedControlIOS,
    FlatList,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import SimpleStepper from 'react-native-simple-stepper'
import SelectActivityButton from '../components/SelectActivityButton'

class CreateChallengeScreen extends React.Component {
    activityPress = () => { 
    }

    images = {
        Bryce: require('../assets/images/bryce.jpg'),
        Chris: require('../assets/images/chris.jpg'),
        Christina: require('../assets/images/christina.jpg'),
        CJ: require('../assets/images/cj.jpg'),
        Denis: require('../assets/images/denis.jpg'),
        Olivia: require('../assets/images/olivia.jpg')
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.subHeading}>Select Activity</Text>
                    <View
                        style={styles.selectActivityStyle}
                    >
                        <View
                            style={styles.activityRowStyle}
                        >
                            <SelectActivityButton 
                            style={styles.activityButton}
                                activityType='Swimming'
                            />
                            <SelectActivityButton 
                            style={styles.activityButton}
                                activityType='Running'
                            />
                            <SelectActivityButton
                            style={styles.activityButton} 
                                activityType='Salad'
                            />
                            <SelectActivityButton 
                            style={styles.activityButton}
                                activityType='Walking'
                            />
                        </View>
                        <View
                            style={styles.activityRowStyle}
                        >
                            <SelectActivityButton 
                                activityType='Biking'
                            />
                            <SelectActivityButton 
                                activityType='Weights'
                            />
                            <SelectActivityButton 
                                activityType='Jumprope'
                            />
                            <SelectActivityButton 
                                activityType='Water'
                            />
                        </View>
                    </View>
                </View> 
                <View> 
                <Text style={styles.subHeading}>Set Goal</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 1, margin: 10, paddingHorizontal: 25 }}>
                            <TextInput
                                style={{ borderColor: 'gray', borderWidth: 1 }}
                                keyboardType='numeric'
                            />
                            <SegmentedControlIOS
                                values={['hr', 'min', 'km', 'mi']}
                                selectedIndex={0}
                                onChange={(event) => {
                                    this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 1, margin: 10, paddingHorizontal: 25 }}>
                            <Text> 3x per Week </Text>
                            <SimpleStepper
                            />
                        </View>
                    </View>
                </View> 
                <Text style={styles.subHeading}>Select Participants</Text>
                <View style={{flexDirection: 'row', padding: 10}}>
                        <View style={{flex:2, padding: 10}}>
                            <Image source={this.images['Bryce']} style={styles.icon} />
                            <Text style={{alignSelf: 'center'}}>Me</Text> 
                        </View>
                        <View style={{flex:2, padding: 10}}>
                            <Image source={this.images['Chris']} style={styles.icon} />
                            <Text style={{alignSelf: 'center'}}>Chris</Text>
                        </View>
                        <View style={{flex:2, padding: 10}}>
                            <Image source={this.images['Christina']} style={styles.icon} />
                            <Text style={{alignSelf: 'center'}}>Christina</Text>
                        </View>
                        <View style={{flex:2, padding: 10}}>
                            <Image source={this.images['CJ']} style={styles.icon} />
                            <Text style={{alignSelf: 'center'}}>CJ</Text>
                        </View>
                </View>
                
                <Image 
                    style={styles.goButton} 
                source={require('../assets/images/go_green.png')} />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    flex: {
    },
    imageStyle: {
        height: 50, 
        width: 50,
        resizeMode: 'contain'
    },
    activityStyle: {
        flex: 1, alignItems: 'center' 
    },
    activityRowStyle: { 
        flex: 1, flexDirection: 'row',
        paddingTop: 10

    },
    selectActivityStyle: {
        flexDirection: 'column'
    },
    icon: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    goButton: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    subHeading: {
        alignSelf: 'center',
        fontSize: 20,
        paddingTop: 10
    },
    activityButton: {
        padding: 10
    }
})

export default CreateChallengeScreen