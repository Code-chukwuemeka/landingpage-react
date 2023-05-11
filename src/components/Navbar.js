import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { FaBars, FaTypo3 } from "react-icons/fa";



function Navbar() {
    const [click, setClick] = useState(false);
const [button, setButton] =useState(true)



    const handleClick = ()=>{
        setClick(!click)
    };
    const closeMobileMenu = ()=>{
        setClick(false);
    }

const showButton = ()=>{
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }


};
    useEffect(() => {
        showButton();
    }, []);

window.addEventListener('resize', showButton);

  return (
  <>

  
  <nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CHUKWUEMEKA <FaTypo3/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
            <FaBars className='white' />
        </div>
        <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign-Up
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    </div>
  </nav>

  </>
  )
}

export default Navbar





