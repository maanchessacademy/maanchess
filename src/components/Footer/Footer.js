import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section contact">
                        <h4>Contact Us</h4>
                        <p>Email: <a href="mailto:maanchessacademy@gmail.com">maanchessacademy@gmail.com</a></p>
                        <p>Phone: <a href="tel:+917440513747">+91 7440513747</a></p>
                    </div>

                    <div className="footer-section support">
                        <h4>Support</h4>
                        <p><a href="/class-guidelines">Class Guidelines</a></p>
                        <p><a href="/terms-conditions">Terms & Conditions</a></p>
                        <Link to="/privacy-policy" >Privacy Policy</Link>

                    </div>

                    <div className="footer-section social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a> */}
                            <a href="https://www.instagram.com/chess__square_orgs/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Maan Chess Academy. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}

export default Footer;
