import React from 'react'

function ChangePassword() {
  return (
    <div className='w-50 mt-5 py-5  mx-auto text-center bg-primary'>
     

        <form className='mt-5 mx-auto text-center'>
  <div className="mb-3 mt-5 ">
    <input type="email" placeholder='EMAIL ADDRESS' className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
 
  <button type="button" class="btn w-100 bg-white text-primary">CHANGE PASSWORD</button>
</form>
    
    </div>

    
  )
}

export default ChangePassword