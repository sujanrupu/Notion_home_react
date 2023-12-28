import React, { useState, useEffect } from 'react';
import logo from './Images/notion_logo.png'
import './Navbar.css';
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div className={`nav ${isScrolled ? 'shadow' : ''}`}>
            <img src={logo} className='image'/>
            <div className="left">
                <span className='item'>Product</span>
                <span className='item'>Download</span>
                <span className='item'>Solutions</span>
                <span className='item'>Resources</span>
                <span className='item'>Pricing</span>
            </div>
            <div className="right">
                <span className='req'>Request a demo</span>
                <span className='line'></span>
                <span className='login'>Log In</span>
                <button className='btn'>Get Notion free</button>
            </div>
        </div>
    );
}
export default Navbar;