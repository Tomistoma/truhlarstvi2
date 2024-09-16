import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/Projekty.css';
import imi1 from './Assets/1.png';
import imi2 from './Assets/van.png';
import imi3 from './Assets/3.png';

const Projekty = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-container">
        <section className="projects-intro">
          <h1>Naše nejkrásnější projekty</h1>
          <p>
           Tady se můžete namotivovat, jak hrozně vám zkurvíme barák a ještě vás za to zkásneme nekřesťanský peníze.
          </p>
        </section>

        {/* Project 1 - Tri-card component */}
        <section className="project-triple">
          <div className="project-cards">
            <div className="project-card">
              <img src={imi1} alt="Project 1 Image 1" className="project-image" />
            </div>
            <div className="project-card">
              <img src={imi2} alt="Project 1 Image 2" className="project-image" />
            </div>
            <div className="project-card-text">
              <h2>Luxury Kitchen Remodel</h2>
              <p>
                This modern kitchen project showcases our ability to blend style with functionality. Using high-end materials and precision craftsmanship, we transformed this space into the heart of the home.
              </p>
              <a className="button" href="/projekty" >Více info</a>
            </div>
          </div>
        </section>

        {/* Project 2 - Tri-card component */}
        <section className="project-triple">
          <div className="project-cards">
            
            <div className="project-card-text">
              <h2>Custom Wardrobe Design</h2>
              <p>
                A custom-built wardrobe designed to maximize space and offer a sleek, modern look. Every inch of this design was carefully crafted to meet the client’s needs.
              </p>
              <a className="button" href="/projekty" >Více info</a>
            </div>
            <div className="project-card">
              <img src={imi3} alt="Project 2 Image 1" className="project-image" />
            </div>
            <div className="project-card">
              <img src={imi1} alt="Project 2 Image 2" className="project-image" />
            </div>
          </div>
        </section>

        {/* Project 3 - Tri-card component */}
        <section className="project-triple">
          <div className="project-cards">
            <div className="project-card">
              <img src={imi2} alt="Project 3 Image 1" className="project-image" />
            </div>
            <div className="project-card">
              <img src={imi3} alt="Project 3 Image 2" className="project-image" />
            </div>
            <div className="project-card-text">
              <h2>Handcrafted Dining Table</h2>
              <p>
                A stunning dining table made from solid wood, handcrafted with precision. This piece was built to last generations and brings warmth to any dining space.
              </p>
              <a className="button" href="/projekty" >Více info</a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projekty;
