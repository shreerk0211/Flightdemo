import React from 'react'
import './Head.css';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <div>

   

    <div className='containers'>
      <div className='navtitle'>
        <a> +977 9878787845 </a>
        <a>Skyflyhigh@gmail.com </a>
      </div>

      
      <div className='login'>
        <div className='loginbtn'>
          <Link to={'/login'}>
          <button>Log In</button>
          </Link>
        </div>

        <div className='signinbtn'>
          <Link to={'/signup'}>
          <button>Sign Up</button>
          </Link>
        </div>

        <div className='a4abb'>

        </div>
      </div>

    
    
      <br></br>
      <hr></hr>
    </div>

    <div className='sky'>
      <div className='sky1'>
      {/* <img className='d66c' src={flightsvg} /> */}
       <b>Sky Fly High</b>
      </div>

      <div className='skynav2'>
        <Link className='linkline' to={'/'}>
        <li>Home</li>
        </Link>
        <Link className='linkline' to={'/bookingdata'}>
        <li>Bookings</li>
        </Link>
        <Link className='linkline' to={'/booking'}>
        <li>Find Ticket</li>
        </Link>
        <Link className='linkline' to={'/contact'}>
        <li>Contact Us</li>
        </Link>
        <Link className='linkline' to={'/about'}>
        <li>About Us</li>
        </Link>
      </div>

    </div>


    









  </div>
  )
}

export default Head