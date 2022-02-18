import React from 'react';
import './navbar.css';
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';
const Navbar = ()=>{
  return (<div>
 
                {/* NAVBAR */}
                
                <nav className="navbar navbar-expand-lg navbar-muted bg-light">
  <div className="container-fluid">
    <img src='/resources/images/logos/logo.png' className="navbar-brand" alt="" height="15%" width="20%"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
      </ul>
      <li className="nav-item dropdown ms-auto">
      <a className="nav-link dropdown-toggle btn btn-primary rounded-pill" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Authenticate
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="dropdown-item" href="#">
        <span><span> <UserOutlined /></span> Sign In</span></a></li>
        <li><a className="dropdown-item" href="#">
        <span><span> <UserAddOutlined /></span> Sign Up</span></a></li>
      </ul>
    </li>
    </div>
  </div>
</nav>
 {/* NAVBAR */}
    </div>);
}
export default Navbar;