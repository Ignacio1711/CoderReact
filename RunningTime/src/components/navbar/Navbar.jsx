import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Running Time</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Destacados</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Zapatillas</a></li>
            <li><a class="dropdown-item" href="#">Relojes</a></li>
            <li><a class="dropdown-item" href="#">Ropa térmica</a></li>
            <li><a class="dropdown-item" href="#">Reseñas</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

    
  )
}

export default Navbar