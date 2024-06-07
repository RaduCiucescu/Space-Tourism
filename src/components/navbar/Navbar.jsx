import Image1 from '../../assets/navbar/image1.svg';
import Image2 from '../../assets/navbar/image2.svg';
import Explore from '../../assets/navbar/explore-image.svg';
import CloseImage from '../../assets/navbar/image3.svg';



import './Navbar.css';
import { useState } from 'react';


const styleNavbarNumber={
  fontWeight:'700'
}


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
   const [activeClassNavbar, setActiveClassNavbar] = useState(false);

   const selectNavbarCategory = () =>{
   setActiveClassNavbar(!activeClassNavbar);
   }
   const handleOpenMenu = () =>{
    setOpenMenu(!openMenu);
   }
   

  return (
    <div>
      <div className="section-container navbar-container">
        <img src={Image1} alt="navbar-image" />
        <div onClick={handleOpenMenu} className={openMenu === false ? ' ' : 'overlay'}>
        <button className={openMenu === false ? 'navbar-accordion-button' : "navbar-accordion-button-closed"}>
            <img src={Image2} alt="accordion-button" />
        </button>
          <div className={openMenu === false ? 'navbar-option-mobile-size-closed' : "navbar-option-mobile-size"}>
            <button className='close-button'>
              <img src={CloseImage} alt="close-image" />
            </button>
            <div className='mobile-menu-options'>
              <a><span style={styleNavbarNumber}>00</span> HOME</a>
              <a><span style={styleNavbarNumber}>01</span> DESTINATION</a>
              <a><span style={styleNavbarNumber}>02</span> CREW</a>
              <a><span style={styleNavbarNumber}>03</span> TECHNOLOGY</a>
            </div>
          </div>
        </div>
        <div className="navbar-options-tablet-size">
            <a onClick={selectNavbarCategory} className={activeClassNavbar === false ? ' ' : 'active'}>HOME</a>
            <a onClick={selectNavbarCategory} className={activeClassNavbar === false ? ' ' : 'active-two'}>DESTINATION</a>
            <a onClick={selectNavbarCategory} className={activeClassNavbar === false ? ' ' : 'active-three'}>CREW</a>
            <a onClick={selectNavbarCategory} className={activeClassNavbar === false ? ' ' : 'active-four'}>TECHNOLOGY</a>
        </div>
        <hr />
        <div className="navbar-options-desktop-size">
            <a><span style={styleNavbarNumber}>00</span> HOME</a>
            <a><span style={styleNavbarNumber}>01</span> DESTINATION</a>
            <a><span style={styleNavbarNumber}>02</span> CREW</a>
            <a><span style={styleNavbarNumber}>03</span> TECHNOLOGY</a>
        </div>
        
      </div>
      <div className='title-description-image-container'>
        <div className="section-container title-and-description-container">
            <p className="home-paragraph">SO, YOU WANT TO TRAVEL TO</p>
            <p className="home-title">SPACE</p>
            <p className="home-description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit   
          back, and relax because we’ll give you a truly out of this world
          experience!
            </p>
        </div>
        <div className="section-container explore-image-container">
            <img className="explore-image" src={Explore} alt="explore-image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
