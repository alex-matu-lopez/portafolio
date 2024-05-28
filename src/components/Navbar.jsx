import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/stylePrincipal.css'

const Navbar = () => {
  return (
<nav id='Navbar' className="navbar navbar-expand-sm " > 
  <div className="container-fluid">
    <a className="navbar-brand">Portafolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/proyects" className="nav-link" aria-current="page">CV</NavLink>
        <a className="nav-link" href="#">Acerca de mi</a>
        <a className="nav-link" href="#">Proyectos</a>
      </div>
    </div>
  </div>
</nav>

  )
}
export default Navbar
