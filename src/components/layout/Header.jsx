import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav class='navbar navbar-dark bg-dark'>
                <div class='container-fluid'>
                    <span class='navbar-brand mb-0 h1'>CRUD OPRATION</span>
                    <FaBars className='hamburger' color='white' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
