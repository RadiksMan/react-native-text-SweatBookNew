import React,{Component} from 'react';
import { Modal,View,Text, TextInput } from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';

import { SearchBar } from './SearchBar';
import {Topbar} from './Topbar';
import {fuzzySearch} from '../services/fuzzySearch';

import {ExerciseList} from './ExerciseList';

export class ExerciseModal extends Component {

    constructor(){
        super();
        this.state = {
            foundExercises:[]
        }
    }

    handleTextChange(text){
        this.setState({
            foundExercises:fuzzySearch(text,this.props.exercises, 'name')
        })
    }

    render(){

        return(
            <Modal
                style={{ flex: 1,paddingTop: 40 }}
                animationType={'slide'}
                visible={this.props.visible}
                
            >
            <View>
                <Text>Modal</Text>
                <Topbar>
                    <LinearGradient 
                        colors={['#87FC70', '#0BD318']}
                        start={[0.0, 0.5]}
                        end={[1.0, 0.5]}
                        locations={[0.0, 1.0]}
                        >
                        <SearchBar onTextChange={this.handleTextChange.bind(this)}/>
        
                    </LinearGradient>
                </Topbar>   
                <ExerciseList exercises={this.state.foundExercises} />
            </View>
          </Modal>
        )
    }
};
