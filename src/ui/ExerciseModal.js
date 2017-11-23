import React from 'react';
import { Modal } from 'react-native';
import { ExerciseList } from './ExerciseList';

export const ExerciseModal = (props) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={props.visible}
  >
    <ExerciseList {...props} />
  </Modal>
);

