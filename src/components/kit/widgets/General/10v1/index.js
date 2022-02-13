import React from 'react'
// import style from './style.module.scss'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

const General10v1 = ({data}) => {
  return (
    <div className="d-flex flex-wrap flex-column align-items-center">
      <div className="kit__utils__avatar kit__utils__avatar--size64 mb-3">
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </div>
      <div className="text-center">
        <div className="text-dark font-weight-bold font-size-18"> {data.admin.firstName} {data.admin.lastName} </div>
        <div className="text-uppercase font-size-12 mb-3">{data.admin.role[0]}</div>
        {/* <button type="button" className={`btn btn-primary ${style.btnWithAddon}`}>
          <span className={`${style.btnAddon}`}>
            <i className={`${style.btnAddonIcon} fe fe-plus-circle`} />
          </span>
          Request Access
        </button> */}
      </div>
    </div>
  )
}

export default General10v1
