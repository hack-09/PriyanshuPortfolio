import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 z-3">
        <div class="container-fluid fs-4">
          <a class="navbar-brand fs-1" href="#">🕊️ Priyanshu Portfolio</a>
          <div className="container justify-content-center w-50">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
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