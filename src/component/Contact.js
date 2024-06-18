import React from 'react'
import './Contact.css';
import Head from '../Common/Head'
//img
import cnt from './assets/contact/bg2.jpg'
import Foot from '../Common/Foot';

function Contact() {
  return (
    <div className='contactmaindiv'>
         
         <div className='headcontact'>
            <Head/>
         </div> 

       <div className='cnttxt'>
           <b>Contact Us</b>
       </div>

      <div className='cntform'>
            <form>
          
          <div className='cntform1'>
         <input type='text' placeholder='Full Name*'></input>

         <input type='text' placeholder='Email*' ></input>
         </div>
           <br></br>
         <div className='cntform1'>
         <input type='text' placeholder='Country of Residence*'></input>

         <input type='text' placeholder='What are you looking for ?' ></input>
         </div>
            <br></br>
         <div className='cntform11'>
         <input type='text' placeholder='How did you hear about us ?*' ></input>
         </div>
            <br></br>
         <div className='cntmform1'>
         <input type='text' placeholder='Message' ></input>
         </div>

         <div className='cntbtn'>
          <button type='submit'>Submit</button>
       </div>
            </form>
       </div>  

        <div className='cntmap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461640.5051930669!2d54.955330924775176!3d25.318766574270274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1718354674329!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

       <div className='cntfoot'>
            <Foot/>
        </div>  

    </div>
  )
}

export default Contact