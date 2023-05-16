import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div style={{background:"black", height:"10vh"}} >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:"white"}} href="#">Productos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" style={{background:"red"}}>
                  <li><a className="dropdown-item" style={{color:"white"}} href="#">Action</a></li>
                  <li><a className="dropdown-item" style={{color:"white"}} href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" style={{color:"white"}} /></li>
                  <li><a className="dropdown-item" style={{color:"white"}} href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar