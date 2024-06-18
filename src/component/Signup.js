import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';


const Signup=()=> {
  return (
    <div className='maindivv'>
      <div className='bg'>

      </div>

<div className='form1'> 
 <div className='signin'>
       <div className='signtitle'>
             <h1>Sign Up</h1>
       </div>

       <div className='signtxt'>
           <h4>Please fill this form to create an account!</h4>
       </div>
           
           </div>

           <div className='hrtag'>
              <hr></hr>
           </div>

        
      <form>
        
        <div className='fstname1'>
         <input type='text' placeholder='First Name'></input>

         <input type='text' placeholder='Last Name' ></input>
         </div>

        <br></br> 
        
         <div className='fstname'>
         <input type='text' placeholder='Phone Number' ></input>
         
         </div>

          <br></br>
         
         <div className='fstname'>
         <input type='text' placeholder='Email' ></input>
         </div>
         
        <br></br>

         <div className='fstname'>
         <input type='text' placeholder='Password' ></input>
         </div>
          <br></br>
         <div className='fstname'>
         <input type='text' placeholder='Confirm Password'></input>
         </div>
  
        <br></br>
           
         <div className='policys'>
             <input type='checkbox'></input>
             <span>I accept the <a>Terms of</a> & <a>Privacy Policy</a></span>
         </div>

        <br></br>

         <div className='btn'>
          <Link to={'/login'}>
            <button type='submit'>Sign Up</button>
            </Link>
         </div>

         

      </form>
      </div>




    </div>//last div
  )
}

export default Signup