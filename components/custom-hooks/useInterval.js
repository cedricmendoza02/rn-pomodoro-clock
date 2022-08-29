import { useEffect, useRef } from 'react';
import BackgroundTimer from 'react-native-background-timer';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = BackgroundTimer.setInterval(tick, delay);
      return () => BackgroundTimer.clearInterval(id);
    }
  }, [delay]);
}

export default useInterval