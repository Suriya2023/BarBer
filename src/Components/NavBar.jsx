import React from 'react'
import './Nav.css'
import logo from './Image/logo (1).png'
function NavBar() {
  return (
    <div>
      <div id="header">
        <div>
          <div className="email">
            <div className="txtid">
              <div>
                <i class="fa-solid fa-envelope"></i> &nbsp; &nbsp;
                abcd123@gmail.com
                &nbsp;&nbsp;&nbsp;|  &nbsp; &nbsp;
                <i class="fa-solid fa-phone"></i> &nbsp; &nbsp;
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

          <header className='small'>
            {/* One */}
            <div id='ThisHiddentwo'>
              <nav className={"navbar navbar-expand-lg"} >
                <div className="container-fluid">

                  <div className='myDis' id='thisDis'>  <span className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
                    <img src={logo} alt="" />
                    {/* <img id='nonefav' src="https://cartzilla.createx.studio/assets/img/intro/features/vector.png" alt="img" /> */}


                  </span> </div>

                  <ul className={"nav justify-content-center "} id='mcone' >
                    <li id='mctwo' className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        Home
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div> </a>

                        </li>
                        <li><a className="dropdown-item" href="#">Fashion Store v.1 <div className='mysmaler'>Hero promo slider</div> </a>

                        </li>
                        <li><a className="dropdown-item" href="#">Fashion Store v.2 <div className='mysmaler'>Hero banner with hotspots</div> </a>

                        </li>
                        <li><a className="dropdown-item" href="#">Furniture Store <div className='mysmaler'>Fancy product carousel</div> </a>

                        </li>
                        <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Hero slider + Category cards</div> </a>

                        </li>
                      </ul>
                    </li>




                    <li id='mctwo' className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div>
                          <div className='mysmaler'>Catalog with Side Filters</div>
                          <div className='mysmaler'>Product General Info</div>
                          <div className='mysmaler'>Product Details</div>
                          <div className='mysmaler'>Product Reviews</div>
                        </a>

                        </li>

                        {/* <br /> */}
                        <li><a className="dropdown-item" href="#">Fashion Store<div className='mysmaler'>Catalog with Side Filters</div>
                          <div className='mysmaler'>Product Page</div>
                        </a>

                        </li>

                        <div>
                          <li><a className="dropdown-item" href="#">Fashion Store<div className='mysmaler'>Catalog with Side Filters</div>
                            <div className='mysmaler'>Product Page</div>
                          </a>

                          </li>
                        </div>


                        <li><a className="dropdown-item" href="#">Furniture Store<div className='mysmaler'>Catalog with Top Filters</div>
                          <div className='mysmaler'>Product Page</div>
                        </a>

                        </li>



                        <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Catalog with Side Filters</div>
                          <div className='mysmaler'>Product Page</div>
                          <div className='mysmaler'>Product General Info</div>
                          <div className='mysmaler'>Product Details</div>
                          <div className='mysmaler'>Product Reviews</div>
                        </a>

                        </li>
                      </ul>
                    </li>





                    <li id='mctwo' className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                      </a>
                      <ul className="dropdown-menu"  >
                        <li><a className="dropdown-item" href="#">Orders History</a></li>
                        <li><a className="dropdown-item" href="#">Wishlist</a></li>
                        <li><a className="dropdown-item" href="#">Payment Methods</a></li>
                        <li><a className="dropdown-item" href="#">Auth Pages</a></li>
                        <li><a className="dropdown-item" href="#">My Reviews</a></li>
                        <li><a className="dropdown-item" href="#">Personal Info</a></li>
                        <li><a className="dropdown-item" href="#">Addresses</a></li>
                        <li><a className="dropdown-item" href="#">Notifications</a></li>
                      </ul>
                    </li>

                    <li id='mctwo' className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <li id='mctwo' className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Docs</a>
                    </li>

                    <li id='mctwo' className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true"><i className="fa-solid fa-cart-shopping"></i>Components</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    {/* <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode}
                            </div> */}


                    &nbsp; &nbsp;
                    <div id='iconUl'>
                      <span><i class="fa-solid fa-magnifying-glass fa-fw"></i></span>
                      <span><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>

                  </form>
                </div>
              </nav>
              <br />
            </div>





          </header>


        </div>



      </div>

    </div>
  )
}

export default NavBar
