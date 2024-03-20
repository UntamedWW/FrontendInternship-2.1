import React from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">
            Navbar
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/'}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/aboutpage'}>
                        About
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true" to={'/login'}>
                        Login
                    </Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to={'/registration'}>
                    Registration
                </Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to={'/list-of-companies'}>
                    List of companies
                </Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to={'/list-of-users'}>
                    List of users
                </Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to={'/company.profile'}>
                    Company profile
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    )
}


export default NavBar