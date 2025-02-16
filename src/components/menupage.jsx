// src/MenuPage.js

import menu22 from '../assets/menu22.jpg'; // Import the first image
import menu23 from '../assets/menu 23.jpg'; 
import menu21 from '../assets/menu1.jpg';// Import the second image
import './menupage.css'; // Import the CSS file

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Menu Page</h1>
      <div className="image-container">
        <img src={menu22} alt="Menu 22" />
        <p>chicken menu</p>
        <img src={menu23} alt="Menu 23" />
        <p>mutton menu</p>
        <img src={menu21} alt="Menu 21" />
        <p>Biryani menu</p>
      </div>
    </div>
  );
};

export default MenuPage;