import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { loginAPI, registerAPI } from '../Services/allAPIs';
  


function Auth({register}) {

    const location = useNavigate()

    const isRegisterForm= register?true:false


    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })
    const registerData=async()=>{

        const {username,email,password} = userData

        if(!username|| !email|| !password){
            alert("Please fill the form")
        }
        else{
    
            const result =await registerAPI(userData)
            console.log(result);

            if(result.status==200){
                alert(result.data)
                location('/login')
            }
            else{
                alert(result.response.data)
            }
        }
        console.log(userData);
    }

    const loginData = async()=>{
        const {email,password}=userData
        if(!email || !password){
            alert("Please fill the form")
        }
        else{
            const result = await loginAPI(userData)
            console.log(result);
            if(result.status==200){
                alert(result.data)
                location('/dashboard')
            }
            else{
                alert(result.response.data)
            }
        }
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
        </MDBContainer>
      </MDBNavbar>

            <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'500px'}}>
        <div className="container">
            <div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h1 className='text-center mb-4'>
                            {
                                isRegisterForm?'Register here':'Login here'
                            }
                        </h1>
                        <form className='p=5'>
                            {
                                isRegisterForm && 
                                <input type="text" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} placeholder='Username' className='form-control mb-3' />
                            }
                           <input type="email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} placeholder='Email' className='form-control mb-3' />
                           <input type="password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} placeholder='Password' className='form-control mb-3' />

                            
                        </form>
                        {
                            isRegisterForm ?
                            <div className='text-center m-4'>
                                <button onClick={registerData} className='btn btn-success'>Register</button>
                                <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>
                                <p className='mt-4'>Already Register? Please Login from here..</p>
                                </Link>
                            </div>
                            :
                            <div className='text-center m-4'>
                            <button onClick={loginData} className='btn btn-success'>Login</button>
                            <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>
                                <p className='mt-4'>New to here? Please Register from here..</p>
                            </Link>
                        </div>
                        }
                    </div>
                    <div className="col-4">
                        <Link to={'/'}>
                        <button style={{marginLeft:'320px',marginTop:'300px'}} className='btn btn-danger'>Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Auth