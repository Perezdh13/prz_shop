import React from 'react'
import instaLogo from '../../../assets/img/instagram.png'
import przLogo from '../../../assets/img/logoPRZ.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{ background: "black", height: "15vh" }} >
      <div style={{ display: "flex", justifyContent:"space-around"}}>
        <a href='https://www.instagram.com/prz_performance/'>
          <img src={instaLogo} style={{ height: "2vh" }} />
        </a>
        <h6 style={{ color: 'white' }}> przperformance13@gmail.com</h6>
        <h6 style={{ color: 'white' }}>Tlf: 657284711 </h6>
      </div>
      <hr style={{ color: "white", height: "1px", margin:0 }} />
      <div style={{ margin: "0px" }} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <Link to="/">
            <img src={przLogo} style={{height:"10vh"}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" style={{ color: "white" }} href="#">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">Segunda Mano</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" style={{ color: "white" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Trabajos
                  </a>
                  <ul className="dropdown-menu" style={{ background: "red" }}>
                    <li><a className="dropdown-item" style={{ color: "white" }} href="#">Electricidad</a></li>
                    <li><a className="dropdown-item" style={{ color: "white" }} href="#">Modelado 3D</a></li>
                    <li><a className="dropdown-item" style={{ color: "white" }} href="#">Mecanica</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search" />
                <button className="btn btn-outline-warning" type="submit">Buscar</button>
              </form>
              <Link to="/logged">
              <button className="btn btn-outline-warning">Login</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar