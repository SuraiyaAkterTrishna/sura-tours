import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="nav-toggle" className="navbar__checkbox" />
            <label htmlFor="nav-toggle" className="navbar__button">
                <span className="navbar__icon">&nbsp;</span>
            </label>
            <div className="navbar__background">&nbsp;</div>
            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item"><a href="#" className="navbar__link"> <span>01</span> About Suratours</a></li>
                    <li className="navbar__item"><a href="" className="navbar__link"> <span>02</span> Your benefits</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link"> <span>03</span> Popular tours</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link"> <span>04</span> Stories</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link"> <span>05</span> Book now</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;