import React from 'react'
import { SectionList, TouchableHighlight, View, Text, 
    TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'


const ExerciseTitle = (props) => {
    return (
        <TouchableOpacity style={styles.title}>
            <Text style={styles.titleText}>{props.exerciseName}</Text>
            <Entypo name='chevron-right' style={styles.chevron} /> 
        </TouchableOpacity>
    )
}

const columnHead = () => {
    return(
        <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.columnText1}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>#</Text>
            </View> 
            <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>Previous</Text>
            </View> 
            <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>Lbs.</Text>
            </View> 
            <View style={[styles.columnText1, {borderLeftWidth: 0}]}>
                <Text style={{alignSelf: 'center', fontFamily: 'sf-light'}}>Reps</Text>
            </View> 
        </View>
    )
}

//Coontains callback for whenever state changes, handled by the parent. 
const ProgressRow = (props) => {
    console.log("Progress Row")
    console.log(props)
    return(
        <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
            <View style={[styles.columnText1, styles.progressRow]}>
                <Text style={styles.rowText}>{props.section.key + 1}</Text>
            </View> 
            <View style={[styles.columnText1, styles.progressRow, {borderLeftWidth: 0}]}>
                <Text style={styles.rowText}>{props.item.num}</Text>
            </View> 
            <View style={[styles.columnText1, styles.progressRow, 
                    {borderLeftWidth: 0, alignItems: 'center'}]}>
                <TextInput
                    onChangeText={(text) => console.log(text)}
                    placeholder='42'>
                </TextInput>
            </View> 
            <View style={[styles.columnText1, styles.progressRow, 
                    {borderLeftWidth: 0, alignItems: 'center'}]}>
                <TextInput 
                    placeholder='24'></TextInput>
            </View> 
        </View>  
    )
}

class Exercise extends React.Component { 
    constructor(props){
        super(props)
        console.log("exercise data")
        console.log(this.props.exerciseData.section)
        console.log(this.props.exerciseData.section.exercise)
        //this.state = { data: this.props.exerciseData.section.data }
        this.state = [
            {
                data: [
                    {num: '1', reps: '10'}]
            },
            {    
                data: [
                    {num:'1', reps:10 }]
            }
        ]
        
    }

    buttonPressed() {
        console.log("HERE")
    }

    addSet = () => {
        return(
            <TouchableHighlight 
                onPress={() => this.setState({data: []})}
                style={styles.button}
            >
                <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'sf-bold'}}>ADD SET</Text>
            </TouchableHighlight> 
        )
    }

    render() {
        console.log(this.props.exerciseData.index + 1)
        return (
            <View style={styles.card}>
                <ExerciseTitle exerciseName={this.props.exerciseData.section.exercise} />
                <SectionList 
                    renderItem={ProgressRow}
                    ListHeaderComponent={columnHead}
                    ListFooterComponent={this.addSet}
                    sections={this.props.exerciseData.section.data}
                    keyExtractor={(item, index) => index}
                />
            </View> 
        )
    }
}

export default Exercise 

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderColor: '#ACACAC',
        borderWidth: 1, 
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowOffset: {  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: .1,
    },
    title: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 5,

    },
    titleText: {
        fontFamily: 'sf-heavy',
        fontSize: 25,
        
    },
    rowText: {
        fontFamily: 'sf-bold',
        fontSize: 14,
        alignSelf: 'center'
    },
    chevron: {
        marginLeft: 10,
        alignSelf: 'stretch',
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
        borderWidth: 1,
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
    button: {
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10,
        backgroundColor: '#FB6D00',
        marginBottom: 10
    },


})