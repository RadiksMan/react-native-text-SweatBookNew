import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'apsl-react-native-button';

export class WorkoutList extends Component {

    static defaultProps = {
        currentWorkout: []
    }

    render() {

        return(
          <View>
            <View style={styles.addSomeExecercises}>
                <Text style={styles.bigText}>add some exercises</Text>
                <Button
                onPress={() => this.props.setModalVisibility(true)}
                style={styles.plusButton}
                textStyle={styles.plus}
                children={<Icon name="add" size={50} color="white" />}
              />
            </View>
          </View>
        )
    }

}


const styles = StyleSheet.create({
    addSomeExecercises: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    bigText: {
      fontSize: 24,
      color: 'blue'
    },
    plusButton: {
      borderStyle: null,
      borderWidth: 0,
      backgroundColor:'transparent'
    },
    plus: {
      color: 'black',
      fontSize: 60
    }
});