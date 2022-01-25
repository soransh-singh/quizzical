import { useNavigate } from 'react-router-dom'
import './style.css'

function Start(props){
  const navigate = useNavigate();

  const handleClick = () => {
    props.startGame()
    navigate('/quiz')
  }

  return(
    <main className="start-page">
      <h1 className="start-page__heading">Quizzical</h1>
      <p className="start-page__content">A trivial quiz app</p>
      <button className="button" onClick={handleClick}>start the quiz</button>
    </main>
  )
}

export default Start
