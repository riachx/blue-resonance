import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/logo.svg" className="footer-logo" alt="Logo" />
            <p className="footer-tagline">Enterprise mobility and IoT solutions</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#strategy" className="footer-link">Strategy</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Blue Resonance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 