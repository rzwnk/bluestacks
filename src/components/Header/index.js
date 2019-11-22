import React from "react";
import "./Header.css";
import logo from "../../logo_bluestacks.png";


const Header = ({langToggle, language}) => {
    return <header>
        <div className="logo-container">
            <img alt="header" className="logo" src={logo} />
            <div>
                <div>BlueStacks</div>
                <div>Play Bigger</div>
            </div>
        </div>
  <div className="langSelector">
  <input type="radio" name="language" value="fr"
   checked={language === "fr"} 
   onChange={langToggle}
   /> Fr
  <input type="radio" name="language" value="en" 
  checked={language === 'en'} 
  onChange={langToggle}
  /> En<br /></div> 
    </header>
};

export default Header;