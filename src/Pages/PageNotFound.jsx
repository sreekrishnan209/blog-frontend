import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function PageNotFound() {


  const location = useNavigate()

  const logout=()=>{
    sessionStorage.clear()
    location('/')
  }


  return (
    <div>
                          <MDBNavbar light bgColor='warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
         <h2 style={{marginLeft:'80px'}}>
         <i class="fa-solid fa-blog fs-2 mx-3"></i>
         MEDIUM</h2>
          </MDBNavbarBrand>
          <button onClick={logout} className='btn btn-danger me-3'>
            <i className='fa-solid fa-right-from-bracket fs-5 me-0'></i>
            </button>
        </MDBContainer>
      </MDBNavbar>
            <div className="container text-center">
        <div>
          <img width={'100%'} height={'550px'} src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" alt="" />
          <button className='btn btn-danger m-3'>Go Back</button>
           </div>
      </div>
    </div>
  )
}

export default PageNotFound