import React from 'react';
import { Text, View } from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';

import { CurrentWorkout } from './CurrentWorkout';

export const Main = () => (
  <LinearGradient
    colors={['#52EDC7', '#5AC8FB']}
    style={{ flex: 1,paddingTop: 40 }}>
    <TabView
      tabBarTextStyle={{ fontSize: 30 }}
      tabBarPosition="overlayBottom"
    >

      <CurrentWorkout tabLabel="+"/>
      
      <Text tabLabel="yo">yo</Text>
    </TabView>
  </LinearGradient>
);
