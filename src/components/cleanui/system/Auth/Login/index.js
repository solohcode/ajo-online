import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Login = (
  // { dispatch, user, logo }`
  ) => {
 

  return (
    <div className='container-fluid'>
     <h1>hello from login page</h1>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
