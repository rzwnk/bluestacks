import React from "react";
import "./Header.css";
import logo from "../../logo_bluestacks.png";


const Header = () => {
    return <header>
        <div className="logo-container">
            <img alt="header" className="logo" src={logo} />
            <div>
                <div>BlueStacks</div>
                <div>Play Bigger</div>
            </div>
        </div>
    </header>
};

export default Header;