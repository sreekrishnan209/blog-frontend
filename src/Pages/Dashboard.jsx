import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import Addblog from '../Components/Addblog';
import Editblog from '../Components/Editblog';



function Dashboard() {

  const location = useNavigate()

  const logout=()=>{
    sessionStorage.clear()
    location('/')
  }

  const existingUser= JSON.parse(sessionStorage.getItem("existingUser"))


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
      <div>
        <div className="container">
          <div className="row">
            <div className='d-flex w-75'>
            <h2 className='m-5 fs-2'>Welcome <span className='text-primary'>{existingUser}User</span></h2>
            <input style={{marginLeft:'70px',width:'350px',height:'30px', marginTop:'120px'}} type="text" placeholder='Search what you want' className='form-control p-4 align-items-center rounded-pill' />
            <i class="fa-solid fa-magnifying-glass fs-4 me-5 text-secondary " style={{marginLeft:'-40px',marginTop:'133px'}}></i>

            </div>

            <div className="col-8">
              <div className='d-flex my-5'>
                <h3 className=''>Blog Posts</h3>
                <div className="ms-auto">
                  <Addblog/>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between border p-3'>
                <h4>Title</h4>
                <div className='d-flex'>
                  <Editblog/>
                  <Link to={'/view/:id'}>
                    <button className='btn'><i className='fa-solid fa-eye text-primary  align-items-center'></i></button>
                  </Link>
                    <button className='btn'><i className='fa-solid fa-trash text-danger align-items-center'></i></button>
                </div>
              </div>
            </div>

            <div className="col-4">
            <div className="container text-center border shadow p-3 mt-3 mb-5 ms-5">
            <h3>My Profile</h3>
            <label>
                <input type="file" style={{display:'none'}} />
                <img width={'150px'} height={'150px'} src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
            </label>
            <div className='w-75' style={{marginLeft:'50px'}}>
                <input type="text" placeholder='Username' className='form-control my-3' />
                <input type="email" placeholder='Email' className='form-control mb-3' />
                <input type="password" placeholder='Password' className='form-control mb-3' />
            </div>

        </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard