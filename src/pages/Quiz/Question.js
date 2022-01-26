import { useState, useEffect } from 'react'
import Option from './Option'
// write a state to maintain options
function Question(props){

  const [selectedOption, setSelectedOption] = useState(-1)
  const isCorrect = props.option[selectedOption] === props.correct

  console.log(isCorrect)
  const option = props.option.map((opt, index)=>(
    <Option
      key={index}
      index={index}
      option={opt}
      handleChange={()=> setSelectedOption(index)}
      selectedOption={selectedOption}
    />
  ))

  return(
    <div className="question">
      <p className="question__title">{props.ques}</p>
      <div className="question__options">
        {option}
      </div>
    </div>
  )
}

export default Question
