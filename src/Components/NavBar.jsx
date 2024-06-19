import React from 'react'
import './Nav.css'
import logo from './Image/logo (1).png'
function NavBar() {
  return (
    <div>

      {/* Top Section */}
      <div id="header">
        <div>
          <div className="email">
            <div className="txtid">
              <div>
                <i className="fa-solid fa-envelope"></i> &nbsp; &nbsp;
                abcd123@gmail.com
                &nbsp;&nbsp;&nbsp;|  &nbsp; &nbsp;
                <i className="fa-solid fa-phone"></i> &nbsp; &nbsp;
                +91 95510190352

              </div>
              <div className="iconid">
                <div id='iconUl'>
                  <span><i className="fa-brands fa-instagram"></i></span>
                  <span><i className="fa-brands fa-facebook"></i></span>
                  <span><i className="fa-brands fa-twitter"></i></span>
                  <span><i className="fa-brands fa-whatsapp"></i></span>
                  <span><i className="fa-brands fa-pinterest"></i></span>
                </div>

              </div>
            </div>
          </div>

          {/* End */}


          {/* first Navbar */}


          <header className='small'>
            {/* One */}
            <div id='ThisHiddentwo'>
              <nav className={"navbar navbar-expand-lg"} >
                <div className="container-fluid">

                  <div className='myDis' id='thisDis'>  <span className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
                    <img src={logo} alt="Logo" />
                    {/* <img id='nonefav' src="https://cartzilla.createx.studio/assets/img/intro/features/vector.png" alt="img" /> */}


                  </span> </div>

                  <ul className={"nav justify-content-center "} id='mcone' >
                    <li className="nav-item dropdown">
                      <a id='lgf' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        Home
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                        <li><a className="dropdown-item" href="#">404 Error</a></li>
                        <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                      </ul>
                    </li>




                    <li className="nav-item dropdown">
                      <a id='lgf' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                        <li><a className="dropdown-item" href="#">404 Error</a></li>
                        <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                      </ul>
                    </li>





                    <li className="nav-item dropdown">
                      <a id='lgf' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                        <li><a className="dropdown-item" href="#">404 Error</a></li>
                        <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a id='lgf' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                        <li><a className="dropdown-item" href="#">404 Error</a></li>
                        <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a id='lgf' className="nav-link " aria-disabled="true">Portfolio</a>
                    </li>

                    <li className="nav-item">
                      <a id='lgf' className="nav-link " aria-disabled="true">Contact</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode}
                            </div> */}


                    &nbsp; &nbsp;
                    <div id='iconUl'>
                      <span className='
                      iconUli'><i className="fa-solid fa-magnifying-glass fa-fw"></i></span>
                      <span className='
                      iconUli'><i className="fa-solid fa-cart-shopping"></i></span>
                    </div>

                  </form>
                </div>
              </nav>
              <br />
            </div>




          </header>
          {/* End */}


          {/* second nav */}

          <header className="largeNav">
            <nav className="navbar bg-body-tertiary fixed-top">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Offcanvas navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {/* End */}

        </div>



      </div>

    </div>
  )
}

export default NavBar
