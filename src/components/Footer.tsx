import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <Logo size={36} variant="simple" prefix="footer" />
            <span>Honey Pot Media</span>
          </a>
          <p>
            A boutique social media management and content creation studio based
            in Tampa, FL. Making brands irresistibly sweet online.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Social Media Management</a>
          <a href="#services">Content Creation</a>
          <a href="#services">Strategy &amp; Analytics</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#why">About Us</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Honey Pot Media. All rights reserved. Made with 🍯 in Tampa, FL.</p>
      </div>
    </footer>
  );
}
