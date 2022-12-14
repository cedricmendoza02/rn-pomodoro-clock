import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import ListItem from './ListItem';

const generateList = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const showToast = () => {
  ToastAndroid.show("Pause timer to change parameters.", ToastAndroid.SHORT);
};

const MinutesScroller = ({title, minutes, updateMinutes, isRunning}) => {
  const [arr, setArr] = useState(generateList(1, 60, 1));
  const [isPressed, setIsPressed] = useState(false);

  const select = i => {
    updateMinutes(title, i);
    setIsPressed(prevState => !prevState);
  };

  const handlePress = () => {
    if(isRunning) {
      showToast();
      return;
    }
    setIsPressed(prevState => !prevState);
  };

  return (
    <View style={[styles.container, isRunning && styles.disabled]}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>{title}</Text>
      {isPressed ? (
        <ScrollView style={styles.scrollContainer}>
          {arr.map(i => (
            <ListItem key={i} num={i} select={select} />
          ))}
        </ScrollView>
      ) : (
        <TouchableOpacity>
          <Text style={styles.num} onPress={handlePress}>
            {minutes}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  num: {
    fontSize: 50,
  },
  disabled: {
    opacity: 0.3,
  }
});

export default MinutesScroller;
