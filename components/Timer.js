import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Timer = () => {
  return (
    <Text style={styles.timerText}>
        00 : 00
    </Text>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 50
  }
})

export default Timer;