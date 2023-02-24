import './LandingPage.css'
import MyPhoto from '../assets/myPhoto.png'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <div className='nav-bar'>
          <img src={ MyPhoto } alt="Eu" />
          <div className="context">
            <h1>Em breve página de apresentação</h1>
            <strong>.NET | C# | REST API | T-SQL | React | Docker</strong>
          </div>
        </div>
        <div className="caixas">
          <div className="caixa-info">
            <h1>.NET</h1>
            <p>ASP.NET Core</p>
            <p>Entity Framework</p>
            <p>Migrations</p>
            <p>ADO.NET</p>
            <p>Dapper</p>
            <p>RestSharp</p>
            <p>Injeção de dependência</p>
            <p>Cosole App</p>
          </div>
          <div className="caixa-info">
            <h1>C#</h1>
            <p>Herança</p>
            <p>Polimorfismo</p>
            <p>Abstraçao</p>
            <p>LINQ</p>
            <p>tipo anônimos</p>
            <p>Listas</p>
            <p>Array</p>
            <p>Records</p>
          </div>
          <div className="caixa-info">
            <h1>Rest API</h1>
            <p>Verbo HTTP</p>
            <p>Padrão Rest</p>
            <p>Json</p>
            <p>XML</p>
          </div>
          <div className="caixa-info">
            <h1>T-SQL</h1>
            <p>Query SQL</p>
            <p>Procedure</p>
            <p>Functions</p>
            <p>Views</p>
            <p>Data Type</p>
          </div>
          <div className="caixa-info">
            <h1>React</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>API (Axio, fetch)</p>
            <p>Hooks</p>
            <p>Components</p>
          </div>
          <div className="caixa-info">
            <h1>Docker</h1>
            <p>Docker CLI</p>
            <p>Docker File</p>
            <p>YAML</p>
            <p>Docker compose</p>
          </div>
        </div>
    </div>
  )
}

export default LandingPage