import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListItem = ({num, select}) => {
  return (
    <TouchableOpacity 
      onPress={() => select(num)}>
      <Text>{num}</Text>
    </TouchableOpacity>
  )
}

export default ListItem