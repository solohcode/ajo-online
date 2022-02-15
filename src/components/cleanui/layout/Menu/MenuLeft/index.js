import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Layout, Divider } from 'antd'
import { 
  HomeOutlined, 
  // ProfileOutlined, 
  UserOutlined, 
  WalletOutlined, 
  MessageOutlined, 
  SettingOutlined, 
  UserSwitchOutlined, 
  InfoCircleOutlined, 
  // TeamOutlined, 
  BookOutlined, 
  DashboardOutlined,
  GroupOutlined,
  SwapOutlined,
  TeamOutlined} from '@ant-design/icons'
import classNames from 'classnames'
import store from 'store'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { find } from 'lodash'
import style from './style.module.scss'

const mapStateToProps = ({ menu, settings, user }) => ({
  menuData: menu.menuData,
  isMenuCollapsed: settings.isMenuCollapsed,
  isMobileView: settings.isMobileView,
  isMenuUnfixed: settings.isMenuUnfixed,
  isMenuShadow: settings.isMenuShadow,
  leftMenuWidth: settings.leftMenuWidth,
  menuColor: settings.menuColor,
  logo: settings.logo,
  role: user.role,
})

const MenuLeft = ({
  dispatch,
  menuData = [],
  location: { pathname },

  isMenuCollapsed,
  isMobileView,
  isMenuUnfixed,
  isMenuShadow,
  leftMenuWidth,
  menuColor,
  logo,
  role,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(store.get('app.menu.selectedKeys') || [])
  const [openedKeys, setOpenedKeys] = useState(store.get('app.menu.openedKeys') || [])

  useEffect(() => {
    applySelectedKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menuData])

  const applySelectedKeys = () => {
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    const selectedItem = find(flattenItems(menuData, 'children'), ['url', pathname])
    setSelectedKeys(selectedItem ? [selectedItem.key] : [])
  }

  const onCollapse = (value, type) => {
    if (type === 'responsive' && isMenuCollapsed) {
      return
    }
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
    setOpenedKeys([])
  }

  const onOpenChange = keys => {
    store.set('app.menu.openedKeys', keys)
    setOpenedKeys(keys)
  }

  const handleClick = e => {
    store.set('app.menu.selectedKeys', [e.key])
    setSelectedKeys([e.key])
  }

  // const generateMenuItems = () => {
  //   const generateItem = item => {
  //     const { key, title, url, icon, disabled, count } = item
  //     if (item.category) {
  //       return <Menu.ItemGroup key={Math.random()} title={item.title} />
  //     }
  //     if (item.url) {
  //       return (
  //         <Menu.Item key={key} disabled={disabled}>
  //           {item.target && (
  //             <a href={url} target={item.target} rel="noopener noreferrer" className='text-primary'>
  //               {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //               <span className={style.title}>{title}</span>
  //               {count && <span className="badge badge-success ml-2">{count}</span>}
  //             </a>
  //           )}
  //           {!item.target && (
  //             <Link to={url}>
  //               <span className={style.title}>{title}</span>
  //               {count && <span className="badge badge-success ml-2">{count}</span>}
  //               {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //             </Link>
  //           )}
  //         </Menu.Item>
  //       )
  //     }
  //     return (
  //       <Menu.Item key={key} disabled={disabled}>
  //         <span className={style.title}>{title}</span>
  //         {count && <span className="badge badge-success ml-2">{count}</span>}
  //         {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //       </Menu.Item>
  //     )
  //   }

  //   const generateSubmenu = items =>
  //     items.map(menuItem => {
  //       if (menuItem.children) {
  //         const subMenuTitle = (
  //           <span key={menuItem.key}>
  //             {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
  //             <span className={style.title}>{menuItem.title}</span>
  //             {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
  //           </span>
  //         )
  //         return (
  //           <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
  //             {generateSubmenu(menuItem.children)}
  //           </Menu.SubMenu>
  //         )
  //       }
  //       return generateItem(menuItem)
  //     })

  //   return menuData.map(menuItem => {
  //     if (menuItem.roles && !menuItem.roles.includes(role)) {
  //       return null
  //     }
  //     if (menuItem.children) {
  //       const subMenuTitle = (
  //         <span key={menuItem.key}>
  //           <span className={style.title}>{menuItem.title}</span>
  //           {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
  //           {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
  //         </span>
  //       )
  //       return (
  //         <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
  //           {generateSubmenu(menuItem.children)}
  //         </Menu.SubMenu>
  //       )
  //     }
  //     return generateItem(menuItem)
  //   })
  // }

  const menuSettings = isMobileView
    ? {
        width: leftMenuWidth,
        collapsible: false,
        collapsed: false,
        onCollapse,
      }
    : {
        width: leftMenuWidth,
        collapsible: true,
        collapsed: isMenuCollapsed,
        onCollapse,
        breakpoint: 'lg',
      }

  const menuList = [
    {
      id: 0,
      title: 'Menu',
      url: false,
      icon: false,
      key: ''
    },
    {
      id: 1,
      title: 'Dashboard',
      url: '/dashboard',
      icon: <DashboardOutlined />,
      key: 'dashboard'
    },
    {
      id: 2,
      title: 'Profile',
      url: '/profile',
      icon: <UserOutlined />,
      key: 'profile'
    },
    {
      id: 3,
      title: 'Groups',
      url: '/groups',
      icon: <TeamOutlined />,
      key: 'groups'
    },
    // {
    //   id: 4,
    //   title: 'Market',
    //   url: '/market',
    //   icon: <BookOutlined />,
    //   key: 'market'
    // },
    {
      id: 5,
      title: 'Transactions',
      url: '/transactions',
      icon: <SwapOutlined />,
      key: 'transaction'
    },
    {
      id: 6,
      title: 'More',
      url: false,
      icon: false,
      key: ''
    },
    {
      id: 7,
      title: 'Settings',
      url: '/settings',
      icon: <SettingOutlined />,
      key: 'settings'
    },
    // {
    //   id: 8,
    //   title: 'Refer & Earn',
    //   url: '/refer',
    //   icon: <UserSwitchOutlined />,
    //   key: 'refer'
    // },
    // {
    //   id: 9,
    //   title: 'Account',
    //   url: '/account',
    //   icon: <UserOutlined />,
    //   key: 'account'
    // },
    {
      id: 10,
      title: 'Help',
      url: '/help',
      icon: <InfoCircleOutlined />,
      key: 'help'
    },
  ];

  const MenuDisplay =()=>(
    menuList.map(({id,title,url,icon})=>(
      <Menu.Item key={id} disabled={!url} icon={<span className={!icon?'':'.menu-icon'}>{icon}</span>} className={!url? '.title':''} >
        <a href={url} >{title}</a>
      </Menu.Item>
    ))
  )

  return (
    <Layout.Sider
      {...menuSettings}
      className={classNames(`${style.menu}`, {
        [style.white]: menuColor === 'white',
        [style.gray]: menuColor === 'gray',
        [style.dark]: menuColor === 'dark',
        [style.unfixed]: isMenuUnfixed,
        [style.shadow]: isMenuShadow,
      })}
    >
      <div
        className={style.menuOuter}
        style={{
          width: isMenuCollapsed && !isMobileView ? 80 : leftMenuWidth,
          height: isMobileView || isMenuUnfixed ? 'calc(100% - 64px)' : 'calc(100% - 110px)',
        }}
      >
        <div className={style.logoContainer}>
          <div className={style.logo}>
            {/* <Avatar shape="circle" size="large" icon={<UserOutlined />} /> */}
            <img alt='ajo-logo' src='/resources/images/logos/logo.png' width="70%" />
            {/* <div className={style.name}>{logo}</div> */}
          </div>
        </div>
        <Divider type="horizontal" className='m-0' />
        <PerfectScrollbar>
          <Menu
            onClick={handleClick}
            selectedKeys={selectedKeys}
            openKeys={openedKeys}
            onOpenChange={onOpenChange}
            mode="inline"
            // className={style.menuInner}
            className={style.navigation}
            inlineIndent="15"
          >
            {/* {generateMenuItems()} */}
            <MenuDisplay />
          </Menu>
          {/* <div className={style.banner}>
            <p>More components, more style, more themes, and premium support!</p>
            <a
              href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-success btn-rounded px-3"
            >
              Buy Bundle
            </a>
          </div> */}
        </PerfectScrollbar>
      </div>
    </Layout.Sider>
  )
}

export default withRouter(connect(mapStateToProps)(MenuLeft))
