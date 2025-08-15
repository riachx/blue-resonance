import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <img src="/logo.svg" className="logo" alt="Logo" />
          </Link>
          <div className="brand-name">
            <strong>BLUE</strong> RESONANCE
        </div>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#strategy" className="nav-link">Strategy</a>
          <a href="#services" className="nav-link">Services</a>
          <Link to="/contact" className="contact-button">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 