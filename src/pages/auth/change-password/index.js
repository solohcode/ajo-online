import React from 'react'
import ChangePassword from 'components/cleanui/system/Auth/ChangePassword'
import './password.css'
function SystemChangePasssword() {
  return (
    
<div className='pswd mt-5 p-5  mx-auto text-center bg-primary'>

  <div>
    <img src='/resources/images/logos/logo-white.png' width='150px' alt=''/>
  </div>
     
<form className='mt-1 mx-auto text-center px-3'>

<div className="mb-3">

 <input type="password" placeholder='PASSWORD' className=" change fw-5 form-control bg-transparent fw-bold py-4 text-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
<div class="mb-3">
 
 <input type="password" placeholder='CONFIRM PASSWORD' className="form-control bg-transparent fw-bold py-4" id="exampleInputPassword1"/>
</div>

<button type="button" className="btn w-100 bg-white  text-primary py-3 mb-2">CHANGE PASSWORD</button>

</form>
 
 </div>
    
  )
}

export default SystemChangePasssword