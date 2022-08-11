import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ListItem from './ListItem';

const generateList = len => {
  return Array.from({length: len + 1}).map((_, i) => i);
};

const MinutesScroller = ({title, defaultMin}) => {
  const [arr, setArr] = useState(generateList(60));
  const [num, setNum] = useState(defaultMin);
  const [isPressed, setIsPressed] = useState(false);

  const select = i => {
    setNum(i);
    setIsPressed(prevState => !prevState);
  };

  const handlePress = () => {
    setIsPressed(prevState => !prevState);
  };

  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>{title}</Text>
      {isPressed ? (
        <ScrollView style={styles.container}>
          {arr.map(i => (
            <ListItem key={i} num={i} select={select} />
          ))}
        </ScrollView>
      ) : (
        <TouchableOpacity>
          <Text style={styles.num} onPress={handlePress}>
            {num}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
  num: {
    fontSize: 50,
  },
});

export default MinutesScroller;
