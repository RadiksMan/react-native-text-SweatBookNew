import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';
import { fuzzySearch } from '../services/fuzzySearch';
import { Topbar } from './Topbar';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from './SearchBar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';


export class ExerciseList extends Component {

    // static defaultProps = {
    //     exercises:[]
    // }

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            foundExercises:ds.cloneWithRows([])
        }
    }

    handleTextChange(text){
        let newState;
        if(!text || text.length < 1){
            newState = this.state.foundExercises.cloneWithRows([]);

        } else {
            newState = this.state.foundExercises.cloneWithRows(
                fuzzySearch(text,this.props.exercises, 'name')
              );
        }

        this.setState({foundExercises: newState});
    }

    closeModal = () => {
        this.setState({foundExercises: this.state.foundExercises.cloneWithRows([])});
        this.props.closeModal();
    }

    handlePress = (exercise) => {
        this.props.addExercise(exercise);
        this.props.closeModal();
    }
  
    render(){

        return (
            <View style={{flex: 1, backgroundColor: '#efefef'}}>
                <Topbar>
                    <LinearGradient 
                        colors={['#87FC70', '#0BD318']}
                        start={[0.0, 0.5]}
                        end={[1.0, 0.5]}
                        locations={[0.0, 1.0]}
                        >

                        <SearchBar onTextChange={this.handleTextChange.bind(this)}/>
                        <View style={{flex: 0.1}}>
                            <Button
                                onPress={this.closeModal}
                                textStyle={styles.close}
                                style={styles.closeButton}
                                children={<Icon name="cancel" size={34} />}
                            />
                        </View>

                    </LinearGradient>
                </Topbar>
                <ListView
                    dataSource={this.state.foundExercises}
                    renderRow={exercise => (
                        <TouchableWithoutFeedback onPress={() => this.handlePress(exercise) }>
                            <View style={styles.row}>
                                <Text style={styles.rowName}>
                                    {exercise.name}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>                
                    )}
                />
            </View>       
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
  