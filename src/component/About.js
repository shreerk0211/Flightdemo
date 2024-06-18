import React from 'react'
import './About.css';
import sky1 from './assets/image/sky3.png'
import Head from '../Common/Head';
import Foot from '../Common/Foot';




function About() {
  return (
    <div className='maindivabout'>
   
   <div className='abouthead'>
          <Head/>
       <div>

     <div className='abttxt'>
         <h1>About Us</h1>
     </div>
     
     {/* <div className='imageabt'>
           <img src={sky1}/>
      </div>    */}

      <div className='abtwords'>
  <h1>About Us</h1>
  <p>Welcome to SkyHigh Adventures, your premier destination for an unforgettable skydiving experience. Founded in 2010, we have grown from a small team of passionate skydivers into one of the most trusted names in the industry.</p>

  <h2>Our Mission</h2>
  <p>At SkyHigh Adventures, our mission is to provide a safe, thrilling, and life-changing skydiving experience for all our customers. We aim to push the boundaries of adventure while maintaining the highest safety standards.</p>

  <h2>Meet Our Team</h2>
  <p>Our team of professional instructors brings over 50 years of combined experience. Each member is certified by the United States Parachute Association (USPA) and undergoes continuous training to ensure your safety and enjoyment.</p>

  <h2>Safety is Our Priority</h2>
  <p>Your safety is our top priority. We adhere to strict maintenance schedules for all our equipment and conduct thorough pre-jump safety checks. Our training programs are designed to equip you with the knowledge and skills needed for a safe jump.</p>

  <h2>Diverse Jump Options</h2>
  <p>Whether you’re a first-time jumper or an experienced skydiver, we have something for everyone. From tandem jumps to solo AFF courses, and even wingsuit flying, we offer a variety of experiences to match your level of adventure.</p>

  <h2>Unmatched Customer Experience</h2>
  <p>From the moment you arrive, our friendly staff will ensure you feel comfortable and excited. Experience the adrenaline rush, breathtaking views, and the ultimate sense of freedom as you skydive with us.</p>

 
  
  <h2>Book Your Jump Today!</h2>
  <p>Ready to take the plunge? Book your skydiving adventure today through our easy online booking system or contact us directly for more information. We can’t wait to help you experience the thrill of a lifetime!</p>
  <p>Contact Us: [88474 43223] | [skyflyhigh@gmail.com] | [skyfly@instagram]</p>
</div>


<div className='ytabout'>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/j54R3P76aS4?si=6Eqewew4N7m5vfWi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>   
    
       </div>
   
   
   </div>

 

    <div className='footer'>
    <Foot/>
    </div>
    
    
    </div> //maindiv
  )
}

export default About