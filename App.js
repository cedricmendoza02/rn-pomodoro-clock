import React, {useState, useEffect} from 'react';
import {Timer, MinutesScroller} from './components/index';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  const [workMin, setWorkMin] = useState(30);
  const [breakMin, setBreakMin] = useState(15);
  return (
    <View style={styles.container}>
      <Timer />
      <View style={{flex: 3}}>
        <MinutesScroller title="Work" defaultMin={workMin} />
        <MinutesScroller title="Break" defaultMin={breakMin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default App;
