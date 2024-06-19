import React from 'react'
import './Nav.css'
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
                  <span><i class="fa-brands fa-instagram"></i></span>
                  <span><i class="fa-brands fa-facebook"></i></span>
                  <span><i class="fa-brands fa-twitter"></i></span>
                  <span><i class="fa-brands fa-whatsapp"></i></span>
                  <span><i class="fa-brands fa-pinterest"></i></span>
                </div>

              </div>


            </div>
          


          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar
