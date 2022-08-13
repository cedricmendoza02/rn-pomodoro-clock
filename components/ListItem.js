import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListItem = ({num, select}) => {
  return (
    <TouchableOpacity 
      onPress={() => select(num)}>
      <Text style={{fontSize: 30}}>{num}</Text>
    </TouchableOpacity>
  )
}

export default ListItem;