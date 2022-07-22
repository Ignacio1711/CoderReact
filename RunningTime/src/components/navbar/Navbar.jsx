import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
                <a className="navbar-brand" href="#">Running Time</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Destacados</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Zapatillas</a></li>
                      <li><a className="dropdown-item" href="#">Relojes</a></li>
                      <li><a className="dropdown-item" href="#">Ropa térmica</a></li>
                      <li><a className="dropdown-item" href="#">Reseñas</a></li>
                    </ul>
                    </li>
                  </ul>
                  <CartWidget />
            </div>
          </div>
        </nav>
        
    </>

    
  )
}

export default Navbar