import React from 'react'
import { StyleSheet, 
    View, 
    Text, 
    TextInput, 
    SegmentedControlIOS,
    FlatList
} from 'react-native'
import SimpleStepper from 'react-native-simple-stepper'

class CreateChallengeScreen extends React.Component { 

    renderActivity = ({item}) => {
        return (
            <Text>
                {item.key}
            </Text>
        )        
    }

    render(){
        return(
            <View>
                <Text>Select Activity</Text> 

                <FlatList 
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                /> 

                <Text>Set Goal</Text> 
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', flex:1, margin:10}}> 
                        <TextInput
                            style={{borderColor: 'gray', borderWidth: 1}}
                            keyboardType='numeric'
                        />
                        <SegmentedControlIOS 
                            values={['hr', 'min', 'km', 'mi']}
                            selectedIndex={0}
                            onChange={(event) => {
                                this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                            }}
                        />
                    </View> 
                            
                    <View style={{flexDirection: 'column', flex:1, margin:10}}> 
                        <Text> 3x per Week </Text> 
                        <SimpleStepper 
                        /> 
                    </View>
                </View> 

                <Text>Select Participants</Text> 
            </View> 
        )
    }
}
const styles = StyleSheet.create({
    flex: {

    }
}) 

export default CreateChallengeScreen