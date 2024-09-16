// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Main.css';
import logo from './Assets/logo.png'

const Navbar = () => {
  return (
    <div className="top-panel">
      <img className="logo" src={logo}></img>
        <nav className="navbar">
          <ul>
            <li><a href="/">O Nás</a></li>
            <li><a href="/dilna">Dílna</a></li>
            <li><a href="/projekty">Projekty</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/en">🇬🇧</a></li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
