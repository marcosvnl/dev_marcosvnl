import React from 'react'
import MyPhoto from '../assets/myPhoto.png'

const LandingPage = () => {
  return (
    <div>
        <img className='my-photo' src={ MyPhoto } alt="Eu" />
        <h1>Em breve página de dev marcosvnl</h1>
        <strong>.NET | C# | T-SQL | React | Docker</strong>
    </div>
  )
}

export default LandingPage