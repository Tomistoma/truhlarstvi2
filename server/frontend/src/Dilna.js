// Navbar.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/Dilna.css';
import imi1 from './Assets/1.png';
import imi2 from './Assets/van.png';
import imi3 from './Assets/3.png';

const Dilna = () => {
        return (
           <div><Navbar/>
           <div className="three-rows-container">
      {/* Row 1: Image on the left, text on the right */}
      <div className="row">
        <div className="image-container">
          <img src={imi1} alt="Row 1 Image" />
        </div>
        <div className="text-container">
          <h2>Tady bude fotka Filipa, jak si honí péro na lepičce nebo jak se tý chujovině řiká</h2>
          <p>A tady srdceryvná stórka o tom, jak si krásně vyhonil a nacákal to někomu do skříně.</p>
        </div>
      </div>

      {/* Row 2: Image on the right, text on the left */}
      <div className="row reverse">
        <div className="image-container">
          <img src={imi2} alt="Row 2 Image" />
        </div>
        <div className="text-container">
          <h2>Tady bude fotka vaší žlutý krásky.</h2>
          <p>Přidal bych do fotky i Lipiho jak si honí péro a láká do dodávky děti na bombońy.</p>
        </div>
      </div>

      {/* Row 3: Image on the left, text on the right */}
      <div className="row">
        <div className="image-container">
          <img src={imi3} alt="Row 3 Image" />
        </div>
        <div className="text-container">
          <h2>A tady asi kontakt pro přidání se do týmu.</h2>
          <p>Protože jestli někdo zvládne ty první dvě fotky a okamžitě nevypne počítač, aby si prostřelil hlavu, tak je to stejnej uchyl jako vy a můžete ho rovnou zaměstnat.</p>
        </div>
      </div>
    </div>
           
           <Footer/></div>
      );
    };
    
    export default Dilna;
    
