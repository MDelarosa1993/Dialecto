import { Link } from "react-router-dom"
import './LandingPage.css'

const LandingPage = () => {

  return (
    <div className="landing-page">
        <h1 className="landing-page-title">Dialecto</h1>
        <div className="landing-page-button-container">
            <h2 className="landing-page-button-title">Breaking Barriers One Translation at a Time</h2>
            <Link to={'/signup'}>
                <button className="landing-page-getstarted-button">Get Started</button>
            </Link>
            <Link to={'/login'}>
                <button className="landing-page-login-button">Log In</button>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage