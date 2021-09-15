import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBarLogin = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/bookride">
                            Smooth-Ride
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginLeft: '160ex'}}>

                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Book Ride
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/profile'>
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/login'>
                                    <button type="button" class="btn btn-danger">Logout</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default NavBarLogin
