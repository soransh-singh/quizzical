import React, {useState} from 'react';
import './css/master.css'
import Start from './pages/Start'
import Quiz from './pages/Quiz'

// Use state to save the quiz quetions
// use effect to fetch the questions


function App() {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <div>
      {isStarted?
        <div><Quiz/></div>:
        <div><Start/> </div>
      }
    </div>
  );
}

export default App;
