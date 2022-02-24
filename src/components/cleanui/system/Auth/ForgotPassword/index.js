import React from 'react'
import  './forgot.css'
const ForgotPassword = () => {
  

  return ( 
      <div  className='home mt-5 p-5  mx-auto text-center bg-primary' >
     <div className='mt-3'>
       <img src='/resources/images/logos/logo-white.png' width='150' alt=''/>
     </div>
 <form className=' mx-auto mt-2 text-center'>
  
  <div class="mb-3 ">
    
    <input type="email" placeholder='EMAIL ADDRESS' className="form-control bg-transparent fw-bold P-5" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
 
  <button type="button" className="btn fw-bold w-100 P-4 bg-white mb-2 text-primary">CHANGE PASSWORD</button>

</form>
    </div>
  )
}

export default ForgotPassword;
