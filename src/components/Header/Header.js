import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="bg-light">
            <nav className="container navbar py-0">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex">
                        <img src={logo} width="60" height="60" alt=""/>
                        <h2 className="navbar-text ms-5">Cricket Stars</h2>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;