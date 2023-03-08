import React from 'react';
import {View, Text} from 'react-native';
import HomeScreenStyles from './HomeScreen.styles';

export const HomeScreen = (): JSX.Element => {
  return (
    <View style={HomeScreenStyles.mainContainer}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
