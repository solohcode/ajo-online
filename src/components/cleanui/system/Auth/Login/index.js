import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Login = (
  { dispatch, user, logo }
  ) => {
 
    const handleSubmit = (values) => {
      dispatch({
        type: 'user/LOGIN',
        payload: values
      })
        console.log(values)
    }

  return (
    <div className='container p-5'>
      <div className='p-5'>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button loading={user.loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
