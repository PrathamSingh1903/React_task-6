import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    const handleResize = () => {
      handleScroll(); 
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <ul className="nav">
            <li className='navlink'><a href="#home">HOME</a></li>
            <li className='navlink'><a href="#about">ABOUT</a></li>
            <li className='navlink'><a href="#education">EDUCATION</a></li>
            <li className='navlink'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>HI FRIENDS !</h3>
        <h1>I am <span>Bondili Pratham Singh</span></h1>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> <span>About</span> me </h1>
        <div className="row">
          <div className="info">
            <h3> <span> Name : </span> Bondili Pratham Singh </h3>
            <h3> <span> Qualification : </span> B.Tech(pursuing) </h3>
            <h3> <span> Address</span> Hyderabad, Telangana </h3>
            <h3> <span> Strengths : </span> Hardworking, Dedicated, Passionate </h3>
            <h3> <span> Hobbies: </span> Playing Football, Listening Music, Gaming </h3>
            <h3> <span> Language : </span> Hindi, English, Telugu, French </h3>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading"> Education <span>Details</span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018-2019</span>
            <h3>CBSE</h3>
            <p style={{ fontSize: '20px' }}>Vignan Bo Tree school, Nizampet</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019-2021</span>
            <h3>Intermediate</h3>
            <h3>M.P.C</h3>
            <p style={{ fontSize: '20px' }}>Sri Chaitanya Junior College, Madinaguda</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021-2025</span>
            <h3>B.Tech</h3>
            <h4>Computer Science and Engineering</h4>
            <p style={{ fontSize: '20px' }}>Vellore Institute Of Technology, Amaravati</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> <span>Contact</span> Me </h1>
        <div className="row">
          <div className="content">
            <h3 className="title">contact info</h3>
            <div className="info">
              <h3> <i className="fas fa-envelope"></i>prathamsinghbondili@gmail.com </h3>
              <h3> <i className="fas fa-phone"></i> 7997971083 </h3>
              <h3> <i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana </h3>
            </div>
          </div>
        </div>
      </section>

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
        </a>
      )}
    </div>
  );
}

export default App;