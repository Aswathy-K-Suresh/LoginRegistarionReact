import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { FaFacebookF } from "react-icons/fa6";
  import { FaTwitter } from "react-icons/fa";
  import { FaGoogle } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa6";
  import { LiaGithub } from "react-icons/lia";
function Footer() {
    return (
        <div className='text'>
     <MDBFooter className=' text-center text-light'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' >
          <FaFacebookF />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaTwitter />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaGoogle />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaInstagram />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaLinkedinIn />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <LiaGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-light' href='/' style={{textDecoration:'none'}}>
          LoginRegistration.com
        </a>
      </div>
    </MDBFooter>
    </div>
    )
}

export default Footer