// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Main.css';
import logo from './Assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section company-info">
              <h3>Truhlářstvím za štěstím</h3>
              <p>Precizní dřevěný nábytek na míru, který přinese radost do vašeho domova.</p>
            </div>
    
            <div className="footer-section contact-info">
              <h4>Kontaktujte nás</h4>
              <p>Email: info@truhlarstvimzastestim.cz</p>
              <p>Telefon: +420 123 456 789</p>
              <p>Adresa: Dřevařská 123, 100 00 Praha</p>
            </div>
    
            <div className="footer-section social-media">
              <h4>Sledujte nás</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Truhlářstvím za štěstím. Všechna práva vyhrazena.</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;
    
