import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark text-white">
    <div class="container-fluid container">
      <p class="navbar-brand">Kegs</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;