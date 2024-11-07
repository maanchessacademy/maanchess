import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/Logo.png';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
// import Btnc from "../Button/btnc/Btnc"

const Navbar = () => {
    const [click, setClicked] = useState(false);
    const clicked = () => {
        setClicked(current => !current);
    }
    return (
        <><nav className='nav_wrap'>
            <div className='navbar_main_container'>
                <div className="left_part">
                    <img src={Logo} className='logo' alt='chesssquare' />
                </div>

                <div className="right_part">
                    <li className='right_part_item'>
                        <Link to="/" onClick={clicked}>Home</Link>
                    </li>

                    <li className='right_part_item'>
                        <Link to="/courses" onClick={clicked}>Courses</Link>
                    </li>
                    <li className='right_part_item'>
                        <Link to="/whyus" onClick={clicked}>Why us?</Link>
                    </li>
                    <li className='right_part_item'>
                        <Link to="/contact" onClick={clicked}>Contact</Link>
                    </li>
                    {/* <li className='right_part_item'> */}
                    {/* <Link to="/about" onClick={clicked}>About</Link> */}
                    {/* </li> */}

                </div>
                <div className='bar' onClick={clicked}>
                    <span className='bar_btn'> {!click ? <FaBars /> : <FaTimes />}</span>
                </div>
            </div>

            <div className="right_part_sm" style={{ display: click ? '' : 'none' }}>
                <li className='right_part_item'>
                    <Link to="/" onClick={clicked}>Home</Link>
                </li>
                <li className='right_part_item'>
                    <Link to="/courses" onClick={clicked}>Courses</Link>
                </li>
                <li className='right_part_item'>
                    <Link to="/whyus" onClick={clicked}>Why us?</Link>
                </li>
                <li className='right_part_item'>
                    <Link to="/contact" onClick={clicked}>Contact</Link>
                </li>
                {/* <li className='right_part_item'>
                    <Link to="/about" onClick={clicked}>About</Link>
                </li> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar