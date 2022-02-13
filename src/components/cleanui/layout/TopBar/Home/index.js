import React from 'react'
import { Link } from 'react-router-dom'

function HomeTopBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent mb-5">
                <div className="container-fluid p-0 m-0">
                    <a className="navbar-brand" href="#">
                        <img alt='norva-logo' src='/resources/images/logo.svg' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold fs-5 mx-3" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold fs-5 mx-3" href="#">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold fs-5 mx-3" href='#'>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {/* <Link to='/auth/login'><button><strong>Join Wait List</strong></button></Link> */}
                            <Link to='/auth/login' className="btn btn-primary btn-lg rounded fw-bold">Join Wait List</Link>
                        </div>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default HomeTopBar
