import React from 'react';
import {View, TextInput} from 'react-native';
import {SearchButton} from '../SearchButton';
import {styles} from './style';

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => (
  <View style={styles.container}>
    <SearchButton />
    <TextInput
      placeholder={'Type to search your city'}
      style={styles.textInputWrapper}
    />
  </View>
);
