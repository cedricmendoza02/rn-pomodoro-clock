import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useInterval from './custom-hooks/useInterval';

// TODO: Fix bug. Same number for both timer to restart
const Timer = ({title, minutes, isRunning, unmountTimer}) => {
  const [seconds, setSeconds] = useState(0);  
  const [rt, setRt] = useState(minutes * 60);
  const DELAY = 1000;

  useInterval(() => {
    setSeconds(prevSec => {
      if(prevSec == 0) return 59;
      return prevSec - 1;
    });
    setRt(prevRt => prevRt - 1);
  }, isRunning ? DELAY : null );

  useEffect(() => {
    if(rt === 0) {
      unmountTimer();
    }
  }, [rt])

  let rtInMinutes = Math.floor(rt / 60);
  let mm = rtInMinutes < 10 ? `0${rtInMinutes}` : rtInMinutes;
  let ss = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>
        {mm} : {ss}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeee4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 50,
  },
});

export default Timer;
