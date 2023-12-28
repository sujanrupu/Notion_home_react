import flogo from './Images/notion_logo.png'
import insta from './Images/Social/insta-removebg-preview.png'
import twitter from './Images/Social/twitter-removebg-preview.png'
import linkedin from './Images/Social/linkedin-removebg-preview.png'
import facebook from './Images/Social/facebook-removebg-preview.png'
import youtube from './Images/Social/youtube-removebg-preview.png'
import darrow from './Images/Social/darrow-removebg-preview.png'
import './Footer.css'
import React, { useState } from 'react';
function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };
    return (
        <div className='footer_tot'>
            <div className="fline"></div>
            <div className="fflex">
                <div className="footer_left">
                    <img src={flogo} className="logo-image" />
                    <div className="social">
                        <img src={insta} alt="" srcset="" className="logo-image1" />
                        <img src={twitter} alt="" srcset="" className="logo-image11" />
                        <img src={linkedin} alt="" srcset="" className="logo-image1" />
                        <img src={facebook} alt="" srcset="" className="logo-image1" />
                        <img src={youtube} alt="" srcset="" className="logo-image1" />
                    </div>

                    <div className="dropdown-wrapper">
                        <div className="dropdown-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <span id="selected-item">{selectedLanguage}</span>
                            <span><img src={darrow} alt="" srcset="" className='darrow' /></span>
                        </div>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <div className="item1-active" onClick={() => handleLanguageChange('English')}>English</div>
                            <div className="item1" onClick={() => handleLanguageChange('Gujarati')}>Gujarati</div>
                            <div className="item1" onClick={() => handleLanguageChange('Tamil')}>Tamil</div>
                            <div className="item1" onClick={() => handleLanguageChange('Hindi')}>Hindi</div>
                        </div>
                    </div>
                </div>

                <div className="ffooter">
                    <div className="footer_right_one">
                        <div className="footer_right_one_one">
                            <div className="a121">Product</div>
                            <div className="a122">Wikis</div>
                            <div className="a122">Projects</div>
                            <div className="a122">Docs</div>
                            <div className="a122">Nation AI</div>
                            <div className="a122">Whats's New</div>
                        </div>

                        <div className="footer_right_one_two1">
                            <div className="a121">Solutions</div>
                            <div className="a122">Enterprise</div>
                            <div className="a122">Small Business</div>
                            <div className="a122">Personal Use</div>
                            <div className="a122">remote Work</div>
                            <div className="a122">Startups</div>
                            <div className="a122">Education</div>
                            <div className="a122">Non-profit</div>
                            <div className="a122">Engineering</div>
                            <div className="a122">Product</div>
                            <div className="a122">Design</div>
                            <div className="a122">Managers</div>
                        </div>
                    </div>

                    <div className="footer_right_two4">
                        <div className="footer_right_one_one4">
                            <div className="a121">Download</div>
                            <div className="a122">iOS & Android</div>
                            <div className="a122">Mac & Windows</div>
                            <div className="a122">Web Clipper</div>
                        </div>

                        <div className="footer_right_one_two4">
                            <div className="a121">Build</div>
                            <div className="a122">Integration</div>
                            <div className="a122">Templates</div>
                            <div className="a122">API docs</div>
                            <div className="a122">Guide & Tutorials</div>
                            <div className="a122">Hire a Consultant</div>
                            <div className="a122">Become a partner</div>
                            <div className="a122">Become an affiate</div>
                        </div>

                        <div className="footer_right_one_two4">
                            <div className="a121">Learn</div>
                            <div className="a122">Customer stories</div>
                            <div className="a122">Webinars</div>
                            <div className="a122">Blog</div>
                            <div className="a122">Community</div>
                        </div>
                    </div>

                    <div className="footer_right_two2">
                        <div className="footer_right_one_three2">
                            <div className="a121">Get started</div>
                            <div className="a122">Switch from Confluence</div>
                            <div className="a122">Switch from Asana</div>
                            <div className="a122">Switch from Evernote</div>
                            <div className="a122">Compare vs Monday</div>
                            <div className="a122">Compare vs Clickup</div>
                            <div className="a122">Compare vs Jira</div>
                        </div>

                        <div className="footer_right_one_two2">
                            <div className="a121">Resources</div>
                            <div className="a122">Pricing</div>
                            <div className="a122">About us</div>
                            <div className="a122">Careers</div>
                            <div className="a122">Media kit</div>
                            <div className="a122">Email us</div>
                            <div className="a122">Security</div>
                            <div className="a122">Cookie settings</div>
                            <div className="a122">Terms & privacy</div>
                            <div className="a122">California Privacy Notice</div>
                            <div className="a122">Status</div>
                            <div className="a122">Managers</div>
                        </div>
                    </div>
                </div>

                <div className="foot_text">
                <span className="foot_desc">We do not sell or share your personal information</span> <br />
                <div className='foot_desc1'>&copy; 2023 Notion Labs, Inc.</div>
                </div>
            </div>

        </div>
    );
}
export default Footer;