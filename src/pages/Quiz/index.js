import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Question from "./Question"

import './style.css'
// adding correct answer in random in option array
function Quiz(props){
  const [ score, setScore ] = useState(0)
  const [ isSubmited, setIsSubmited ] = useState(false)

  const navigate = useNavigate()

  const handleBack = () => {
    props.stopGame()
    navigate('/')
  }

  const checkAnswer = ()=>{
    setIsSubmited(true)
    console.log("checkinggg.... Answers");
  }

  const question = props.questions.map(
    (q, index)=>{
      const {question, correct_answer, incorrect_answers} = q
      const option = [...incorrect_answers]
      option.splice(Math.floor(Math.random()*4), 0, correct_answer)
      return(
      <Question
        key={index}
        ques={question}
        correct={correct_answer}
        option={option}
        updateScore={(val)=>setScore(prevScore => prevScore + val)}
        isSubmited={isSubmited}
      />
    )})

    return(
      <main className="quiz">
      <div className="quiz__questions">
      {question}
      </div>
      <p>{isSubmited && score}</p>
      <button className="quiz__button button" onClick={checkAnswer}>Check Answer</button>
      </main>
    )
}

export default Quiz


// incorrect_answers.splice(Math.ceil(Math.random()*3),0 ,correct_answer)
