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

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Select Activity</Text>
                    <View
                        style={styles.selectActivityStyle}
                    >
                        <View
                            style={styles.activityRowStyle}
                        >
                            <SelectActivityButton 
                                activityType='Swimming'
                            />
                            <View
                                style={styles.activityStyle}  >
                                <Image source={require('../assets/images/run.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Running</Text>
                            </View>
                            <View
                                style={styles.activityStyle}
                            >
                                <Image source={require('../assets/images/salad.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Salad</Text>
                            </View>
                            <View
                                style={styles.activityStyle}
                            >
                                <Image source={require('../assets/images/footsteps.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Walking</Text>
                            </View>
                        </View>
                        <View
                            style={styles.activityRowStyle}
                        >
                            <View
                                style={styles.activityStyle}
                            >
                                <Image source={require('../assets/images/bike.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Biking</Text>
                            </View>
                            <View
                                style={styles.activityStyle}  >
                                <Image source={require('../assets/images/weights.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Weights</Text>
                            </View>
                            <View
                                style={styles.activityStyle}
                            >
                                <Image source={require('../assets/images/jumprope.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Jumprope</Text>
                            </View>
                            <View
                                style={styles.activityStyle}
                            >
                                <Image source={require('../assets/images/water.png')}
                                    style={styles.imageStyle}
                                    resizeMode='contain'
                                />
                                <Text>Water</Text>
                            </View>
                        </View>
                    </View>
                </View> 

                <View> 
                    <Text>Set Goal</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 1, margin: 10 }}>
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

                        <View style={{ flexDirection: 'column', flex: 1, margin: 10 }}>
                            <Text> 3x per Week </Text>
                            <SimpleStepper
                            />
                        </View>
                    </View>
                </View> 

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
        flex: 1, flexDirection: 'row' 
    },
    selectActivityStyle: {
        flexDirection: 'column'
    }
})

export default CreateChallengeScreen