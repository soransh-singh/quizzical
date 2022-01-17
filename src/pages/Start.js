import React from 'react'


// button to change the state of isStarted and fetch the quiz quiestions

function Start(props){

  return(
    <div>
      <h1>Quizzical</h1>
      <p>A trivial quiz app</p>
      <button onClick={props.startGame}>start the quiz</button>

    </div>
  )
}

export default Start
