import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='maindivv'>
    <div className='bg'>

    </div>

<div className='form1'> 
<div className='signin'>
     <div className='signtitle'>
           <h1>Log In</h1>
     </div>
         
         </div>

         <div className='hrtag'>
            <hr></hr>
         </div>

      
    <form>
      
      <br></br> 
        <br></br>
       
       <div className='fstname'>
       <input type='text' placeholder='Email' ></input>
       </div>
       
      <br></br>

       <div className='fstname'>
       <input type='text' placeholder='Password' ></input>
       </div>
        <br></br>
      

      <br></br>
         
       <div className='policy'>
           <input type='checkbox'></input>
           <span>Remember Me </span>
           <a>Forgot Password?</a>
       </div>

      <br></br>

       <div className='btn1'>
        <Link to={'/booking'}>
          <button type='submit'>Log In</button>
          </Link>
       </div>

       <div className='registers'>
         <p>Dont have an account? <span> <Link className='linkline' to={'/signup'}> Register </Link></span></p>
       </div>
       

    </form>
    </div>


       

  </div>//last div
  )
}

export default Login