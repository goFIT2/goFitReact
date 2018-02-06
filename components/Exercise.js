import React from 'react'
import { SectionList, TouchableHighlight, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'


const exerciseTitle = (props) => {
    return (
        <TouchableOpacity style={styles.title}>
            <Text>Bench Press</Text>
            <Entypo name='chevron-right' style={styles.chevron} /> 
        </TouchableOpacity>
    )
}

const columnHead = () => {
    return(
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
    )
}

class Exercise extends React.Component { 
    constructor(props){
        super(props)
        this.props.name = "Barbell Press"
    }
    
    addSet = () => {
        console.log("button pressed")
    }

    render() {
        const title = ( 

        )

        const columnHead = (

        )
        
        const progressRow = (
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
        )

        const addSet = (
            <TouchableHighlight 
                onPress={() => this.addSet()}
                style={styles.button}
                >
                <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'white'}}>ADD SET</Text>
            </TouchableHighlight> 
        )
        return (
            <View>
                <SectionList
                    renderItem={progressRow}
                    ListHeaderComponent={title}
                    renderSectionHeader={columnHead}
                    renderSectionFooter={addSet}
                    sections={[{
                        data: 1, title: "Barbell"
                    }]}
                >

                </SectionList>
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
    button: {
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10,
        backgroundColor: '#FB6D00'
    }
})