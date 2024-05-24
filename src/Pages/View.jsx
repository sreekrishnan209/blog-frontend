import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function View() {


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

      <div className='py-3' style={{backgroundColor:'rgba(244,222,203,0.7)'}}>
          <div style={{backgroundColor:'rgb(176,113,84)', color:'rgb(244,222,203)',border:'1px solid rgb(58,35,23)'}} id='d3' className='d-flex m-5 pe-3'>
            <div className='ms-5 mt-5'>
              <h4 className='mt-4 fw-bolder'><span>Title:</span> </h4>
              <h6 className='mt-4 fw-bolder'><span>Author:</span> </h6>
              <h6 className='mt-4 fw-bolder'><span>Content:</span> </h6>
              <p className='mt-4 fw-bolder'><span>Date:</span> </p>
              <div className='d-flex justify-content-evenly mt-5 mb-3'>
                <a style={{backgroundColor: 'rgb(58,35,23)', color:'white'}} href="/dashboard" className='btn'>Go Back</a>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default View