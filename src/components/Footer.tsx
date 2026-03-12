import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <Image
              src="/assets/honey-pot-bears-white.png"
              alt="Honey Pot Media"
              width={160}
              height={160}
            />
          </a>
          <p>
            A boutique social media management and content creation studio
            helping brands build authentic communities and scroll-stopping
            content.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Social Media Management</a>
          <a href="#services">Content Creation</a>
          <a href="#services">Influencer Marketing</a>
          <a href="#services">Brand Activations</a>
          <a href="#services">Strategy &amp; Consulting</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#why">About Us</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://www.instagram.com/honeypot.media/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 Honey Pot Media. All rights reserved. Made with 🍯 in
          Tampa, FL.
        </p>
      </div>
    </footer>
  );
}
