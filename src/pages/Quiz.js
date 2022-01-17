import React from "react"
import Question from "./components/Question"


// adding correct answer in random in option array
function Quiz(props){
  console.log(props.questions)
  const question = props.questions.map(
    (q, index)=>{
      const {question, correct_answer, incorrect_answers} = q
      const option = [...incorrect_answers]
      option.splice(Math.ceil(Math.random()*3), 0, correct_answer)
      return(
      <Question
        key={index}
        ques={question}
        correct={correct_answer}
        option={option}
      />
    )})
  return(
    <div>quiz page
      <button onClick={props.stopGame}>back button</button>
      {question}
      <button>Show Answer</button>
    </div>
  )
}

export default Quiz


// incorrect_answers.splice(Math.ceil(Math.random()*3),0 ,correct_answer)
