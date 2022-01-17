
// write a state to maintain options
function Question(props){

  function handleChange(){
    console.log("you clicked me bitch...")
  }

  const option = props.option.map((opt, index)=>(
    <div key={index} onClick={handleChange}>{opt}</div>
  ))
  return(
    <div>
      <p>{props.ques}</p>
      <p>{props.correct}</p>
      {option}
    </div>
  )
}

export default Question
