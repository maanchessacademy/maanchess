import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section contact">
                        <h4>Contact Us</h4>
                        <p>Email: <a href="mailto:abhishekparmar7440@gmail.com">abhishekparmar7440@gmail.com</a></p>
                        <p>Phone: <a href="tel:+917649866386">+91 7649866386</a></p>
                        {/* <p><a href="https://wa.me/7649866386" target="_blank" rel="noopener noreferrer">Whata</a></p> */}
                    </div>

                    <div className="footer-section support">
                        <h4>Support</h4>
                        <p><a href="/class-guidelines">Class Guidelines</a></p>
                        <p><a href="/terms-conditions">Terms & Conditions</a></p>
                        <p><a href="/privacy-policy">Privacy Policy</a></p>
                    </div>

                    <div className="footer-section social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ChessSquare. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}

export default Footer;
