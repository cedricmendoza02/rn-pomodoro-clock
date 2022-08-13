import React, {useState, useEffect} from 'react';
import {Timer, MinutesScroller} from './components/index';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [workMin, setWorkMin] = useState(5);
  const [breakMin, setBreakMin] = useState(2);
  const [currentTimer, setCurrentTimer] = useState('Work');
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => setCurrentTimer(prevState => (prevState == 'Work' ? 'Break' : 'Work'));
  const toggleTimerStatus = () => setIsRunning(prevState => !prevState);
  const updateMinutes = (target, num) => {
    target == 'Work' ? setWorkMin(num) : setBreakMin(num);
  }

  return (
    // TODO: Add a background image using ImageBackground React Native
    <View style={styles.container}>
      <Text style={styles.header}>Focused Session</Text>
      {currentTimer == 'Work' ? 
      (
        <Timer
          title="Work"
          minutes={workMin}
          isRunning={isRunning}
          unmountTimer={toggleTimer}
        />
      ) : (
        <Timer
          title="Break"
          minutes={breakMin}
          isRunning={isRunning}
          unmountTimer={toggleTimer}
        />
      )}
      <View style={styles.controlsContainer}>
        <MinutesScroller title="Work" minutes={workMin} updateMinutes={updateMinutes} isRunning={isRunning}/>
        <MinutesScroller title="Break" minutes={breakMin} updateMinutes={updateMinutes} isRunning={isRunning}/>
      </View>
      <Button 
        title="Start/Pause" 
        onPress={toggleTimerStatus}></Button>
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
