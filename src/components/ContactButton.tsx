import { Link } from 'react-router-dom'
import '../styles/ContactButton.css'

function ContactButton() {
  return (
    <Link to="/contact" className="contact-btn">
      Contact
    </Link>
  )
}

export default ContactButton 