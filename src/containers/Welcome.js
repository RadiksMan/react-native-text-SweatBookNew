import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

export const Welcome = (props) => (
  
  <AnimatedLinearGradient customColors={presetColors.sunrise} speed={4000}>  
    <View style={styles.titleContianer}>
      <Text style={styles.title}>
        Sweatbook
      </Text>
    </View>

    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>
        Log your fitness
      </Text>
    </View>
    <View style={{ padding: 30 }}>
      <Button
        onPress={props.startWorkout}
        style={styles.button}
        color="#841584"
        title={'Start Workout'}
      />
    </View>
  </AnimatedLinearGradient>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor:'rgba(255,255,255,0)'
  },
  lastWorkoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'rgba(255,255,255,0.9)',
    backgroundColor:'rgba(255,255,255,0)'
  },
  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});
