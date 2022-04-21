import React from 'react';
import './navbar.css';
<<<<<<< HEAD
import {UserOutlined, UserAddOutlined, PlusCircleFilled} from '@ant-design/icons';
=======
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
>>>>>>> 1354fde3b50a1ba59b1cf3ee9152045938cdbac6
const Navbar = ()=>{
  
  return (<div>
 
                {/* NAVBAR */}
                
                <nav className="navbar navbar-expand-lg navbar-muted bg-light">
  <div className="container-fluid">
  <img src='/resources/images/logos/logo.png' className="navbar-brand" alt="" height="15%" width="20%"/>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon hamburger">
    ☰
    </span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">About</a>
    </li>
    <li class="nav-item me-5">
      <a class="nav-link" href="#">Contacts</a>
    </li>
    <li class="nav-item dropdown  px-1">
      <a class="nav-link dropdown-toggle  round btn-primary text-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Authenticate
      </a>
<<<<<<< HEAD
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="dropdown-item text-center" href="#">
          <span><span> <UserOutlined /></span> Sign In</span></a></li>
        <li><a className="dropdown-item text-center" href="#">
          <span><span> <UserAddOutlined /></span> Sign Up</span></a></li>
=======
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><Link to="/auth/login" className="dropdown-item" href="#">
        <span><span> <UserOutlined /></span> Sign In</span></Link></li>
        <li><a className="dropdown-item" href="#">
        <span><span> <UserAddOutlined /></span> Sign Up</span></a></li>
>>>>>>> 1354fde3b50a1ba59b1cf3ee9152045938cdbac6
      </ul>
    </li>
  </ul>
</div>
  </div>
</nav>
 {/* NAVBAR */}
    </div>);
}
export default Navbar;