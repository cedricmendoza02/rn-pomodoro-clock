import React, {useState, useEffect, useRef} from 'react';
import {Timer, MinutesScroller} from './components/index';
import {View, Text, Button, StyleSheet} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

// TODO: Allow app to continue running the interval even when the app is not focused.
const App = () => {
  const [workMin, setWorkMin] = useState(30);
  const [breakMin, setBreakMin] = useState(15);
  const [currentTimer, setCurrentTimer] = useState('Work');
  const [isRunning, setIsRunning] = useState(false);
  const renderCount = useRef(0);

  useEffect(() => {
    if(isRunning) SoundPlayer.playSoundFile('alarm_clock', 'ogg');
  }, [currentTimer]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [workMin, breakMin]);

  const toggleTimer = () => setCurrentTimer(prevState => prevState == 'Work' ? 'Break' : 'Work');
  const toggleTimerStatus = () => setIsRunning(prevState => !prevState);
  const updateMinutes = (target, num) => target == 'Work' ? setWorkMin(num) : setBreakMin(num);

  return (
    // TODO: Add a background image using ImageBackground React Native
    <View style={styles.container}>
      <Text style={styles.header}>Focused Session</Text>
      {currentTimer === 'Work' ? 
        <Timer
          key={renderCount.current}
          title="Work"
          minutes={workMin}
          isRunning={isRunning}
          unmountTimer={toggleTimer}
        /> : 
        <Timer
          key={renderCount.current + 1}
          title="Break"
          minutes={breakMin}
          isRunning={isRunning}
          unmountTimer={toggleTimer}
        />
      }
      <View style={styles.controlsContainer}>
        <MinutesScroller
          title="Work"
          minutes={workMin}
          updateMinutes={updateMinutes}
          isRunning={isRunning}
        />
        <MinutesScroller
          title="Break"
          minutes={breakMin}
          updateMinutes={updateMinutes}
          isRunning={isRunning}
        />
      </View>
      <Button title="Start/Pause" onPress={toggleTimerStatus}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfb28d',
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 60,
    fontWeight: '500',
    textAlign: 'center',
  },
  controlsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
