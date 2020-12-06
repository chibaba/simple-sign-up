import React from 'react'

import { Image } from 'react-bootstrap'

import { ImLocation, ImPhone } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'
import './login.css'

const Imag = () => {
  return (
    <div>
      <Image src="./images/illustrative.jpg" roundedCircle style={{ border: "none", margin: "10%", width: "50%" }} />
      <p style={{ color: "GrayText" }}><ImLocation /> 151 New Park Ave, Hatford, CT06106 <br />United States</p>
      <p style={{ color: "GrayText" }}><ImPhone />+1(203)302-9545</p>
      <p style={{ color: "GrayText" }} ><HiOutlineMail />contactus@inveritasoft.com</p>

      <div class="social-icons">
        <a href="hhtps://facebook.com"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/chibaba"><i class="fab fa-github"></i></a>
        <a href="https://youtube.com"><i class="fab fa-youtube"></i></a>
      </div>

    </div>
  )
}

export default Imag
