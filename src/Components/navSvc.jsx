import React from 'react'
import './Blog.css'
import './navSvc.css'
import logo from './Image/logo (1).png'
// import Footer from './Footer'

export default function Blog() {
  return (
    <div>
      {/* Top Section */}
      <div id="headerrr">
        <div>
          <div className="emaill">
            <div className="txtidd">
              <div>
                <i className="fa-solid fa-envelope"></i> &nbsp; &nbsp;
                abcd123@gmail.com
                &nbsp;&nbsp;&nbsp;|  &nbsp; &nbsp;
                <i className="fa-solid fa-phone"></i> &nbsp; &nbsp;
                +91 95510190352

              </div>
              <div className="iconid">
                <div id='iconUUl'>
                  <span><i className="fa-brands fa-instagram"></i></span>
                  <span><i className="fa-brands fa-facebook"></i></span>
                  <span><i className="fa-brands fa-twitter"></i></span>
                  <span><i className="fa-brands fa-whatsapp"></i></span>
                  <span><i className="fa-brands fa-pinterest"></i></span>
                </div>

              </div>
            </div>

            {/* close */}


            {/* navsstart */}
            <header className='smalll'>
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
                        <a id='lgff' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                          Home
                        </a>
                        <ul className="dropdown-menu"  >
                          <li><a className="dropdown-item" href="#">About</a></li>
                          <li><a className="dropdown-item" href="/">Blog</a></li>
                          <li><a className="dropdown-item" href="#">Contact</a></li>
                          <li><a className="dropdown-item" href="#">Help Center</a></li>
                          <li><a className="dropdown-item" href="#">404 Error</a></li>
                          <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                        </ul>
                      </li>




                      <li className="nav-item dropdown">
                        <a id='lgff' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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





                      <li className="nav-item">
                        <a id='lgff' href='./App.js' target='_blank' className="nav-link " aria-disabled="true">Blog</a>
                      </li>

                      <li className="nav-item">
                        <a id='lgff' href='./Blog.jsx' target='_blank' className="nav-link " aria-disabled="true">Services</a>
                      </li>
                      <li className="nav-item">
                        <a id='lgff' href='./Blog.jsx' target='_blank' className="nav-link " aria-disabled="true">Portfolio</a>
                      </li>

                      <li className="nav-item">
                        <a id='lgff' className="nav-link " aria-disabled="true">Contact</a>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode}
                            </div> */}


                      &nbsp; &nbsp;
                      <div id='iconUll'>
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
            {/* close */}


            <section className='mainbloge'>
              <h1>What We Do</h1><br /><h3>Home - <span className='bloge'>Service</span></h3>
            </section>





            {/* second nav */}

            <header className="largeNavv">
              <nav className="navbar ">
                <div className="container-fluid">

                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                  </a>
                  <button className="navbar-togglerr" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      {/* <img src={logo} alt="Logo"/> */}
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><img id='uuuu' src="https://th.bing.com/th/id/OIP.FqvZ6Kyu0LWTkLYkWJ8t3gHaHc?rs=1&pid=ImgDetMain" alt="" /></button>
                    </div>
                    <hr className='hrline' />

                    <div className="offcanvas-body" >
                      <div id='dopcenter'>
                        <img src={logo} alt="Logo" id='imgcenter' />
                      </div>
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item" id='myhome'>
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='myhome'>
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
                        <li className="nav-item" id='myhome'>
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='myhome'>
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
                        <li className="nav-item">
                          <a id='lgf' href='/App' className="nav-link " aria-disabled="true">Blolg</a>
                        </li>
                        <li className="nav-item">
                          <a id='lgf' className="nav-link " aria-disabled="true">Service</a>
                        </li>

                        <li className="nav-item ">
                          <li className="nav-item">
                            <a id='lgf' className="nav-link " aria-disabled="true">Portfolio</a>
                          </li>

                          <li className="nav-item">
                            <a id='lgf' className="nav-link " aria-disabled="true">Contact</a>
                          </li>

                        </li>
                      </ul>
                      {/* <form className="d-flex mt-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                  </div>
                </div>
              </nav>
            </header>

            <section className='mainblogee' id='nexthdblog'>
              <h1>What We Do</h1><br /><h3>Home - <span className='blogee'>Service</span></h3>
            </section>


            {/* End */}
          </div>

          {/* End */}



        </div>

      </div>
      {/* footer
      <Footer/> */}
    </div>
  )
}