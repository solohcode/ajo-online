import React, { useState } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})


const Register = (
  // { dispatch, user }
  ) => {
  // const [psCheck, setpsCheck] = useState({
  //   hidden: true,
  //   eight: false,
  //   uppercase: false,
  //   unique: false
  // })
  // const {hidden, eight, uppercase, unique} = psCheck
  

  // const handleCheck = e => {
  //   const {value} = e.target
  //   if(value){
  //     setpsCheck(all=>({...all, hidden:false}))
  //   }else{
  //     setpsCheck(all=>({...all, hidden:true}))
  //   }
  //   if(value.length === 8 || value.length > 8){
  //     setpsCheck(all=>({...all, eight:true}))
  //   }else{
  //     setpsCheck(all=>({...all, eight:false}))
  //   }
  //   if(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g.test(value)){
  //     setpsCheck(all=>({...all, uppercase:true}))
  //   }else{
  //     setpsCheck(all=>({...all, uppercase:false}))
  //   }
  //   if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)){
  //     setpsCheck(all=>({...all, unique:true}))
  //   }else{
  //     setpsCheck(all=>({...all, unique:false}))
  //   }
  // }

  return (
    <div className='container-fluid'>
     <h1>hello from register page</h1>
    </div>
  )
}

export default connect(mapStateToProps)(Register)
