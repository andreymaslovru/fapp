import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {SearchInput} from '../../../components /SearchInput';

import {styles} from './style';

interface MainScreenViewProps {}

export const MainScreenView: React.FC<MainScreenViewProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello app</Text>
      <Text> TEXT </Text>
      <SearchInput />
    </SafeAreaView>
  );
};
