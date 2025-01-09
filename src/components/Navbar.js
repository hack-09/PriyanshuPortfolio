import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 z-3 navBar">
        <div class="container-fluid fs-4">
          <div className="container navhead d-flex">
            <div className="container d-flex">
              <a class="navbar-brand fs-1 topHead" href="#">🕊️ Priyanshu Portfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse text-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#skill">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#project">Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar