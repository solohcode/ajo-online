import React from 'react'
import { Helmet } from 'react-helmet'
import VerifyEmail from 'components/cleanui/system/Auth/VerifyEmail'

const SystemVerifyEmail = () => {
  return (
    <div >
      <Helmet title="Verify email" />
      <VerifyEmail />
    </div>
  )
}

export default SystemVerifyEmail
