import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';

export class ExerciseList extends Component {

    static defaultProps = {
        exercises:[]
    }

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows([])
        }
    }
  
    render(){

        const dataSource = this.state.dataSource.cloneWithRows(this.props.exercises);

        return (
            <ListView
                dataSource={dataSource}
                renderRow={exercise => (
                    <TouchableWithoutFeedback >
                        <View style={styles.row}>
                            <Text style={styles.rowName}>
                                {exercise.name}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>                
                )}
            />       
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: 'white',
      flex: 0.9,
      borderColor: 'grey',
      borderRadius: 1,
      borderWidth: 1,
      height: 35,
      padding: 5,
      justifyContent: 'center',
      borderRadius: 20
    },
    topbar: {
      flexDirection: 'row',
      flex: 1,
      padding: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      color: 'black',
      fontSize: 20
    },
    close: {
      fontSize: 34
    },
    closeButton: {
      borderWidth: 0
    },
    row: {
      borderWidth: 1,
      borderColor: 'grey'
    },
    rowName: {
      fontSize: 30
    }
  })