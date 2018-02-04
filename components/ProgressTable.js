import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import ProgressTableRow from '../components/ProgressTableRow.js'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

export default class ProgressTable extends React.Component {
    render() {
      const tableHead = ['', 'Amount', 'Reps', 'Date'];
      const tableData = [
        ['1', '2 reps', '30 lb', '1/10'],
        ['2', '3 reps', '50 lb', '1/12'],
        ['3', '4 reps', '20 lb', '1/15'],
      ];
      return (
                <View style = {styles.bigView}>
                  <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                  </Table>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  bigView: {paddingRight: 30},
  head: { height: 10, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 10, fontSize: 8 },
  row: { height: 10 }
})
