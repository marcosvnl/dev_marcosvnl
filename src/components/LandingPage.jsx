import './LandingPage.css'
import MyPhoto from '../assets/myPhoto.png'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <img src={ MyPhoto } alt="Eu" />
        <div className="context">
          <h1>Em breve página de aprensentação</h1>
          <strong>.NET | C# | REST API | T-SQL | React | Docker</strong>
        </div>
    </div>
  )
}

export default LandingPage