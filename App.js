import React, {useState} from 'react';
import PomodoroClock from './components/PomodoroClock';

// TODO: Allow app to continue running the interval even when the app is not focused.
const App = () => {
  const [renderCount, setRenderCount] = useState(0);
  const resetGame = () => setRenderCount(prevState => prevState + 1);

  return (
    <PomodoroClock key={renderCount} reset={resetGame}/>
  );
};  

export default App;
