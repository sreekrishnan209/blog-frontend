import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'



function Home() {
  return (
    <div>
      <Header/>
      <div className='bg-warning' style={{height:'550px'}}>
      <div className="container">
        <div className="row">
          <div className="col-6 p-4 text-center" style={{marginTop:'100px'}}>
            <h1 className='p-1' style={{color:'black',fontSize:'100px'}}>Stay Curious.</h1>

            <h4 className='mt-4 mb-5 mx-4' style={{color:'black',textAlign:'justify'}}>Discover stories, thinking, and expertise from writers on any topic.</h4>
            <div style={{marginLeft:'-400px'}}>
              <Link to={'/login'}>
              <button style={{backgroundColor:'black'}} className='btn btn-md text-light rounded-pill shadow mb-5 mx-4 px-4'>Start Reading</button>
              </Link>
          </div>
          </div>
          <div className="col-6">
            {/* <img width={'500px'} height={'400px'} style={{marginTop:'100px',marginLeft:'150px'}} src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home