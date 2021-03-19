import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import SignUp from './SignUp';
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

  const extendElement = () => {
  dropdown ? setDropdown(false) : setDropdown(true);
}


    return (
        <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          MasteringStudy
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={extendElement}>
            <Link to='/#' className='nav-links'  >
              Teaching <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <DropDown onCloseMobileMenu={closeMobileMenu}/> }
          </li>
          <li className='nav-item'>
            <Link
              to='/#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Learning
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
            </li>
            
            <li className='nav-item'>
            <Link
              to='/sign-in'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign IN
            </Link>
          </li>
        </ul>
        
      </nav>
    </>
    );
};

export default Navbar;