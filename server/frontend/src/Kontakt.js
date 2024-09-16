import React from 'react';
import './Styles/Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import leaderImage from './Assets/1.png'; // Your circular image here
import './Styles/Kontakt.css';

const Kontakt = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        {/* Leader Section */}
        <div className="leader-section">
          <img src={leaderImage} alt="Company Leader" className="leader-image" />
          <h2>Meet Our Leaders</h2>
          <p>
            Our company is led by passionate professionals who are dedicated to delivering the best products and services to our clients. With years of experience and a love for craftsmanship, we ensure every project is done with care and precision.
          </p>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: info@ourcompany.com</p>
          <p>Phone: +123 456 7890</p>
          <p>
            Instagram: <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">@yourcompany</a>
          </p>
        </div>

        {/* Inquiry Form */}
        <div className="inquiry-form">
          <h2>Pošlete nám Vaší zakázku</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Jméno:</label>
              <input type="text" id="name" name="name" placeholder="Jméno" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Váš Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telnumber">Telefoní číslo:</label>
              <input type="text" id="telnumber" name="telnumber" placeholder="Vaše telefoní číslo" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Zpráva:</label>
              <textarea id="message" name="message" rows="5" placeholder="S čím Vám můžeme pomoci?" required></textarea>
              <label htmlFor="message">Po obdržení Vaší pohledávky se Vám co nejdříve ozveme.</label>
            </div>
            
            <button type="submit" className="submit-btn">Poslat žádost</button>
            
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
