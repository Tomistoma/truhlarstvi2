import {React, useEffect, useState} from 'react';
import heroImage from './Assets/backgroundCropped.jpeg';
import './Styles/Main.css';
import Navbar from './Navbar';
import imi1 from './Assets/1.png';
import imi2 from './Assets/5.png';
import imi3 from './Assets/3.png';
import Footer from './Footer';

const Main = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track when images are loaded

  useEffect(() => {
    const counters = document.querySelectorAll('.number');
    const duration = 2000; // 2 seconds duration

    const animateNumbers = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / (duration / 20); // Calculate increment for the duration

        const updateCount = () => {
          const currentCount = +counter.innerText;

          if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCount, 20); // Update every 20ms for smooth animation
          } else {
            counter.innerText = target; // Once it reaches the target, stop updating
          }
        };

        updateCount(); // Start animation
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imagesLoaded) { // Only trigger if images are loaded
          // Add a 1-second delay before starting the animation
          setTimeout(() => {
            animateNumbers(); // Start the animation after the delay
            observer.disconnect(); // Ensure the animation only triggers once
          }, 300); // 1 second delay (1000ms)
        }
      });
    }, {
      threshold: 1 // Trigger only when the entire element is in view (100%)
    });

    const target = document.querySelector('.numbers-panel');
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, [imagesLoaded]); // Dependencies include imagesLoaded to trigger effect when images are ready

  // Function to check if all images are loaded
  const handleImageLoad = () => {
    setImagesLoaded(true); // Mark that images are loaded
  };
  return (
    <div className="main-content">
        <Navbar/>
          <div className="hero-section">
        <img onLoad={handleImageLoad} src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h2>Truhlářstvím za štěstím: dřevo, které zanechá třísku ve vašem srdci.</h2>
          <p>
          Dva kluci přijedou, všechno naměří, v kanceláři spočítají, v dílně nařeží, dodávkou k vám rychle dovezou, do 18. patra to klidně vynesou, u vás doma vše složí, ať vám to radost množí.    </p>
          <div className="scroll-arrow-container">
      <div className="scroll-arrow">⮸⮸⮸</div> {/* Unicode for down arrow */}
    </div>
        </div>
      </div>
 {/* Numbers Panel */}
 <div className="numbers-panel">
        <div className="number-item">
          <h3>Spokojení zákazníci</h3>
          <p className="number" data-target="12">0</p>
        </div>
        <div className="number-item">
          <h3>Vyšlapaných pater</h3>
          <p className="number" data-target="385">0</p>
        </div>
        <div className="number-item">
          <h3>Zavrtaných vrutů</h3>
          <p className="number" data-target="1568">0</p>
  </div>
</div>

          {/* Ukázky projektů */}
      <div className="featured-content">
        <div className="featured-item">
          <img src={imi1} alt="Feature 1" className="featured-image" />
          <h4>Elegantní, moderní kuchyně na míru, s precizním designem v černém matném kameni s dřevěným prvkem</h4>
        </div>
        <div className="featured-item">
          <img src={imi2} alt="Feature 2" className="featured-image" />
          <h4>Skříně pro nějakýho zkurvenýho právníka, co si musí pořídit pokoj skříní, aby měla jeho žena kam dávat boty</h4>
        </div>
        <div className="featured-item">
          <img src={imi3} alt="Feature 3" className="featured-image" />
          <h4>Tohle se dá koupit v ikee za půlku peněz.....</h4>
        </div>
      </div>
      <a className="news-tag" href="/projekty" >Další projekty</a>
    <div>

    </div>
<Footer/>
    </div>
  );
};

export default Main;
