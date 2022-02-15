import React from 'react'
import { Badge, Dropdown } from 'antd'
import List2 from 'components/kit/widgets/Lists/2'
import styles from './style.module.scss'

const Actions = () => {
  const menu = (
    <React.Fragment>
      <div className="card cui__utils__shadow width-350 border-0">
        <div className="card-body p-0">
          <List2 />
        </div>
      </div>
    </React.Fragment>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className={`${styles.dropdown}`}>
        <div className=''>
          <Badge dot color="blue" offset={[,20]}>
            <i className={`${styles.icon} fe fe-bell`} />
          </Badge>
        </div>
      </div>
    </Dropdown>
  )
}

export default Actions
