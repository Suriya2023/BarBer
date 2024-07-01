import React from 'react'
import './Footer.css'
import loGoFooter from './Image/logo (1).png'
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footermain">
                    <div className="footermain1">
                        <div className='footerul' id='foot'>
                            <div type='none' id='fimg' >
                                <img src={loGoFooter} alt="" />
                            </div>
                            <div className='fthrrr' />

                            {/* <hr /> */}
                            <div type='none' ><i class="fa-solid fa-location-dot" style={{ color: "#63E6BE" }}></i>&nbsp;1235, Air Mall, Busy Commercial Street, Big City, India - 4215</div>
                            <div type='none' ><i class="fa-solid fa-envelope" style={{ color: " #63E6BE" }}></i> &nbsp;rajputsuraj@gmail.com</div>
                            <div type='none' ><i class="fa-solid fa-phone" style={{ color: "#63E6BE" }}></i>&nbsp; +91 9510190352</div>
                        </div>


                    </div>
                    <div className="footermain2">
                        <div className='footerul' id='foot' >
                            <div type='none' className='mufth4' >
                                <h4>Working Hour</h4>
                            </div>
                            <div className='fthr' />
                            <div type='none' >Mon-Fri : 10:00 - 9:00</div>
                            <div type='none' >Saturday : 10:00 - 8:00</div>
                            <div type='none' >Sunday : Closed</div>
                            <div type='none' ><i class="fa-brands fa-whatsapp"></i> &nbsp; <i class="fa-brands fa-facebook"></i>  &nbsp; <i class="fa-brands fa-instagram"></i> &nbsp; <i class="fa-brands fa-twitter"></i>  &nbsp; <i class="fa-brands fa-pinterest"></i></div>
                        </div>
                    </div>
                    <div className="footermain3">
                        <div className='footerul' id='foot'>
                            <div type='none' className='mufth4' ><h4>Links</h4></div>
                            <div className='fthrr' />
                            <div type='none' >Home</div>
                            <div type='none' >Services</div>
                            <div type='none' >Blog</div>
                            <div type='none' >Contact Page</div>
                            {/* <li type='none' >Terms & Conditions</li> */}
                        </div>
                    </div>
                    <div className="footermain4">
                        <div className='footerul' id='foot'>
                            <div type='none' className='mufth4'><h4>Subscribe</h4></div>
                            <div className='fthhr' />
                            <div type='none' className='textareaft' ><input required id='fttext' type="text" placeholder='Email Address' /></div>
                            <div type='none' ><button>Subscribe</button></div>
                            {/* <li type='none' ><i class="fa-solid fa-envelope"></i> </li> */}
                            <div className='fthrrr' />

                            <div type='none'>    <button className='submit'>Submit</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
