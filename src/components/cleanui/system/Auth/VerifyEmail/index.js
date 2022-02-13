import React, {createRef} from 'react'
import { connect } from 'react-redux'




const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const VerifyEmail = (
  // { dispatch, user }
  ) => {
  
  // const digit1 = createRef();
  // const digit2 = createRef();
  // const digit3 = createRef();
  // const digit4 = createRef();

  // const handleChange = (e)=>{
  //   e.preventDefault()
  //   const {
  //     name, 
  //     // value
  //   } = e.target
  //   if(name === "digit1"){
  //     digit2.current && digit2.current.focus()
  //   }else if(name === "digit2"){
  //     digit3.current && digit3.current.focus()
  //   }else if(name === "digit3"){
  //     digit4.current && digit4.current.focus()
  //   }
  // }
  return (
    <div className='container-fluid'>
      <h1>hello from verify email page</h1>
    </div>
  )
}

export default connect(mapStateToProps)(VerifyEmail)
