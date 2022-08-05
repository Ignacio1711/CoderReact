import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
                <Link to="/" className="navbar-brand">Running Time </Link >
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                   <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                      </a>
                      <ul className="dropdown-menu">
                        <Link to="/category/shoes"  className="dropdown-item">Zapatillas</Link> 
                        <Link to="/category/watch"  className="dropdown-item">Relojes</Link> 
                        <Link to="/category/trail"  className="dropdown-item">Trail Running</Link> 
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