import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'


class Exercise extends React.Component { 
    constructor(props){
        super(props)
        this.props.name = "Barbell Press"
    }
    
    render() {
        return (
            <View>

                <TouchableOpacity style={styles.title}>
                    <Text>Bench Press</Text>
                    <Entypo name='chevron-right' style={styles.chevron} /> 
                </TouchableOpacity>

                <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
                    <View style={styles.columnText1}>
                        <Text style={{alignSelf: 'center'}}>#</Text>
                    </View> 
                    <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>Previous</Text>
                    </View> 
                    <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>Lbs.</Text>
                    </View> 
                    <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>Reps</Text>
                    </View> 
                </View>

                <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
                    <View style={[styles.columnText1, styles.progressRow]}>
                        <Text style={{alignSelf: 'center'}}>1</Text>
                    </View> 
                    <View style={[styles.columnText1, styles.progressRow, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>1</Text>
                    </View> 
                    <View style={[styles.columnText1, styles.progressRow, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>1</Text>
                    </View> 
                    <View style={[styles.columnText1, styles.progressRow, {borderLeftWidth: 0}]}>
                        <Text style={{alignSelf: 'center'}}>1</Text>
                    </View> 
                </View>  

            </View> 
        )
    }
}
export default Exercise 

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row'
    },
    chevron: {
        marginLeft: 10
    },
    chart: {
        flexDirection: 'row', 
        flex: 1
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    columnText1: {
        borderColor: '#D8D8D8',
        borderWidth: 3,
        flex: 1
    },
    progressRow: {
        borderTopWidth: 0
    },
    headerColumnBox: {
        borderColor: '#D8D8D8'
    },
    progressBox: {
        borderColor: '#D8D8D8',
        borderTopWidth: 0
    },
})