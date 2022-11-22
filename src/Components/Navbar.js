import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import './cssfiles.css';
function Navbar() {
  const navigate = useNavigate();

  let location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark a  md-10" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">iNotebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : " "}`} aria-current="page" to="/login">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : " "}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? <form className="d-flex">

              <Link to="/login" className="btn btn-dark" role="button">Login</Link>
              <Link to="/register" className="btn btn-dark" role="button">Register</Link>
            </form> : <button onClick={logout} className="btn btn-dark ">Log out</button>}
          </div>
        </div>
      </nav>


 
    </>

    
  )
}

export default Navbar;
