import React from 'react';
import {View, TextInput} from 'react-native';
import {SearchButton} from '../SearchButton';

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => (
  <View>
    <SearchButton />
    <TextInput placeholder={'Type to search your city'} />
  </View>
);
