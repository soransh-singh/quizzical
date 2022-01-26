import { useState } from 'react'

function Option(props) {
  const subClass = props.index === props.selectedOption ? 'question__option--select': ''
  

  return (
    <li className={`question__option ${subClass}`} onClick={props.handleChange}>{props.option}</li>
  )
}

export default Option
