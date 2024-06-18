import React from 'react'
import './Foot.css';
//icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Foot() {
  return (
    <div className='footer'>

     <div className='navfoot'>
         <ul>
            <div className='navtxt'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            </div>

            <div className='navicon'>
                <li><FaFacebook /></li>
                <li><FaTwitterSquare /></li>
                <li><FaYoutube /></li>
                <li><FaInstagramSquare /></li>
                <li><FaLinkedin /></li>

            </div>
         </ul>
     </div>

    </div>
  )
}

export default Foot