import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">PG</span>
            <span>
              <b>PUROHIT</b>
              <small>GROUP OF COMPANIES</small>
            </span>
          </div>
          <p>A modern group of enterprises united by legacy, execution and long-term relationships.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram" className="social-label">IG</a>
            <a href="#" aria-label="LinkedIn" className="social-label">in</a>
            <a href="#" aria-label="Facebook" className="social-label">f</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/">Our Companies</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+917597511000"><Phone size={17} /><span>+91 75975 11000</span></a>
          <a href="mailto:gunjangrajp@gmail.com"><Mail size={17} /><span>gunjangrajp@gmail.com</span></a>
          <a href="https://www.google.com/maps/search/?api=1&query=Plot+No+1%2F1+MIDC+Kalyan+Bhiwandi+Rd+Saravali+Bhiwandi+Maharashtra+421311" target="_blank" rel="noreferrer"><MapPin size={17} /><span>Bhiwandi, Maharashtra</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Purohit Group of Companies</span>
        <span>Designed for a premium multi-business experience <ArrowUpRight size={15} /></span>
      </div>
    </footer>
  )
}
