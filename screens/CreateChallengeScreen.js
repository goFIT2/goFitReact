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
                            <SelectActivityButton 
                                activityType='Running'
                            />
                            <SelectActivityButton 
                                activityType='Salad'
                            />
                            <SelectActivityButton 
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
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 1, margin: 10, paddingLeft: 50 }}>
                            <Text>Set Goal</Text>
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
                        <View style={{ flexDirection: 'column', flex: 1, margin: 10, paddingRight: 50 }}>
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