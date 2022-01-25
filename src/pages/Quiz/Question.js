
// write a state to maintain options
function Question(props){

  function handleChange(){
    console.log("you clicked me bitch...")
  }

  const option = props.option.map((opt, index)=>(
    <li key={index}  className="question__option" onClick={handleChange}>{opt}</li>
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
