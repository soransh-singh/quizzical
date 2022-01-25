import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/master.css';
import Start from './pages/Start';
import Quiz from './pages/Quiz';

// Use state to save the quiz quetions
// use effect to fetch the questions


function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    if (isStarted){
      fetchQuestions()
    }
  },[isStarted])

  const fetchQuestions = async ()=>{
    const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const data = await response.json()
    setQuestions(data.results)
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Start startGame={()=> setIsStarted(true)}/>}></Route>
        <Route path="/quiz" element={<Quiz stopGame={()=> setIsStarted(false)} isStarted={isStarted} questions={questions} />} ></Route>
      </Routes>
    {/*<div>
      {isStarted?
        <div>
          <Quiz
            stopGame={()=> setIsStarted(false)}
            questions={questions}
          />
        </div>:
        <div><Start startGame={()=> setIsStarted(true)}/> </div>
      }
    </div>*/}
  </div>
  );
}

export default App;
