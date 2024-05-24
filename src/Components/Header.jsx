import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import './Header.css'
import { Link } from 'react-router-dom'
  

function Header() {
  return (
    <div>
              <MDBNavbar light bgColor='warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
         <h2 style={{marginLeft:'80px'}}>
         <i class="fa-solid fa-blog fs-2 mx-3"></i>
         MEDIUM</h2>

         <nav className=''>
          <ul type='none'>
            <li>Our Story</li>
            <li><a href="">Membership</a></li>
            <Link to={'/login'}>
            <button style={{backgroundColor:'black'}} className='btn text-light rounded-pill shadow'>Get Started</button>
            </Link>
          </ul>
         </nav>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header