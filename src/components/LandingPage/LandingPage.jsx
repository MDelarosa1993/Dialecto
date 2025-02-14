import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <div className="landing-page">
        <h1 className="landing-page-title">Breaking Barriers, One Translation at a Time</h1>
        <Link to={'/signup'}>
            <button className="landing-page-getstarted">Get Started</button>
        </Link>
        <Link to={'/login'}>
            <button className="landing-page-login">Log In</button>
        </Link>
    </div>
  )
}

export default LandingPage