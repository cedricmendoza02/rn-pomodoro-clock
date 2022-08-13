import React, {useMemo, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useInterval from './custom-hooks/useInterval';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeee4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});

const convertToMinutes = seconds => Math.floor(seconds / 60);

const Timer = ({title, minutes, isRunning, unmountTimer}) => {
  const [runTime, setRunTime] = useState(minutes * 60); // in Seconds
  const [seconds, setSeconds] = useState(0);
  const [minutesDisplay, setMinutesDisplay] = useState(
    convertToMinutes(runTime)
  );

  useEffect(() => {
    setSeconds(0)
    setRunTime(minutes * 60);
    setMinutesDisplay(convertToMinutes(runTime));
  }, [minutes])
  
  useEffect(() => {
    if (runTime === 0) {
      unmountTimer();
      return;
    }
    setMinutesDisplay(convertToMinutes(runTime));
  }, [runTime]);

  useInterval(
    () => {
      setRunTime(prevSec => prevSec - 1);
      setSeconds(prevSec => {
        if (prevSec == 0) return 59;
        return prevSec - 1;
      });
    },
    isRunning ? 10 : null
  );

  let mm = minutesDisplay < 10 ? `0${minutesDisplay}` : minutesDisplay;
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

export default Timer;
