import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/logo.svg" className="logo" alt="Logo" />
          <div className="brand-name">
            <strong>BLUE</strong> RESONANCE
        </div>
        </div>
        <div className="navbar-right">
          <a href="#home" className="nav-link">Home</a>
          <a href="#strategy" className="nav-link">Strategy</a>
          <a href="#services" className="nav-link">Services</a>
          <button className="contact-button">Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 