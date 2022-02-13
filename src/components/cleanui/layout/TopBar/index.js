import React from 'react'
// import FavPages from './FavPages'
import Search from './Search'
// import IssuesHistory from './IssuesHistory'
// import ProjectManagement from './ProjectManagement'
// import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import style from './style.module.scss'
// import { LineHeightOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'


const TopBar = () => {
  let { pathname } = useLocation()
  // const path = pathname.slice(1)
  
  return (
    <div className={style.topbar}>
      {/* <div className="mr-4">
        <FavPages />
      </div> */}
      <div className="mr-auto px-lg-5">
        <Search />
        {/* <p className="m-0 fw-bold fs-5 text-capitalize">{path}</p> */}
      </div>
      <div className="mr-4 d-none d-md-block">
        {/* <IssuesHistory /> */}
      </div>
      <div className="mb-0 mr-auto d-xl-block d-none">
        {/* <ProjectManagement /> */}
      </div>
      <div className="mr-4 d-none d-sm-block">
        {/* <LanguageSwitcher />   */}
      </div>
      <div className="mr-4 d-none d-sm-block">
        <i class="fa fa-moon-o fs-4 cursor-pointer" aria-hidden="true"></i>
      </div>
      <div className="mr-4">
        <UserMenu />
      </div>
      <div className="mr-4 d-none d-sm-block">
        <Actions />
      </div>
    </div>
  )
}

export default TopBar
