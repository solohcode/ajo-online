import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar } from 'antd'
import styles from './style.module.scss'

const mapStateToProps = ({ user }) => ({ user })

const ProfileMenu = ({ dispatch }) => {
  // const [count, setCount] = useState(7)
  const data = JSON.parse(localStorage.getItem("data"));
  const logout = e => {
    e.preventDefault()
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  const addCount = () => {
    // setCount(count + 1)
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <strong>
          <FormattedMessage id="topBar.profileMenu.hello" />, {data?.admin?.firstName + data?.admin?.lastName || 'Anonymous'}
        </strong>
        {/* <div>
          <strong className="mr-1">
            <FormattedMessage id="topBar.profileMenu.billingPlan" />:{' '}
          </strong>
          Professional
        </div> */}
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.role" />:{' '}
          </strong>
          {data?.admin?.role[0] || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.email" />:{' '}
          </strong>
          {data?.admin?.email || '—'}
          <br />
          <strong>
            <FormattedMessage id="topBar.profileMenu.phone" />:{' '}
          </strong>
          {data?.admin?.phone || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/profile">
          <i className="fe fe-user mr-2" />
          <FormattedMessage id="topBar.profileMenu.editProfile" />
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="/#" onClick={logout}>
          <i className="fe fe-log-out mr-2" />
          <FormattedMessage id="topBar.profileMenu.logout" />
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={addCount}>
      <div className={`${styles.dropdown}`}>
        <div className="">
          <Avatar className="p-0 m-0" shape="circle" src="/resources/images/avatars/4.jpg" icon={<UserOutlined />} />
          <span className='mx-2'>Tunji Daniel</span>
        </div>
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(ProfileMenu)
