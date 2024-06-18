import React from 'react'
import './Flight.scss';
// reacticons
import { CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// img
import logo1 from './assets/image/logo1.png'
import logo from './assets/image/Logo.png'
import first from './assets/image/1st.jpg'
import second from './assets/image/2nd.jpg'
import fourth from './assets/image/5thA.jpg'
import fifth from './assets/image/3rd.jpg'
import lugage from './assets/image/Illustration.jpg'
//icon
import mail from './assets/icon/Illustration.svg'
import flightsvg from './assets/icon/Frame 81.svg'
import flighticon from './assets/icon/Vector.svg'
import licon from './assets/icon/Vector (1).svg'
import twitter from './assets/icon/entypo-social_twitter-with-circle.svg'
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import { BiColor } from 'react-icons/bi';
//BGVIDEO

import bg4 from './assets/image/bg4.mp4'
import { Link } from 'react-router-dom';
function Flight() {

  return (
    <div className='maindiv'>

      <div className='a1'>
        <video className='videoTag' autoPlay loop muted>
          <source src={bg4} type='video/mp4' />
        </video>
        {/* bg image */}
      </div>

      <div className='container'>
        <div className='a2'>
          <a>+977 9878787845</a>
          <a>skyflyhigh@gmail.com</a>
        </div>

        <div className='a3'>
          <img src={flighticon} />
          <img src={licon} />
          <img src={twitter} />
        </div>

        <div className='a4'>
          <div className='a4a'>
            <Link to={'/Login'}>
              <button>Log In</button>
            </Link>
          </div>

          <div className='a4b'>

            {/* <Link to ='/signup'> */}

            <Link to={'/signup'}>    <button>Signup</button></Link>
            {/* </Link> */}

          </div>

          <div className='a4ab'>

          </div>
        </div>


      </div>

      <div>
        <br></br>
        <hr></hr>
      </div>

      <div className='b'>
        <div className='b1'>
          <img className='d66c' src={flightsvg} />
          <b>Sky Fly High</b>
          {/* <img src={logo1} /> */}
        </div>

        <div className='nav2'>
          <Link className='linkline' to={'/'}>
            <li>Home</li>
          </Link>
          <Link className='linkline' to={'/About'}>
            <li>About Us</li>
          </Link>
          <Link className='linkline' to={'/Contact'}>
            <li>Contact Us</li>
          </Link>

        </div>

      </div>


      <div className='c'>
        <div className='c1'>
          <p>Say Yes to The World</p>
        </div>

        <div className='skytxt'>
          <span>Welcome to Sky Fly High! <br></br>We offer thrilling the best<br></br>skydiving experiences for all<br></br>skill levels. </span>
        </div>



      </div>











    </div>


  )
}

export default Flight