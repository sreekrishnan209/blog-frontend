import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css'
    

function Footer() {
  return (
    <div>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <ul type='none'>
            <li>Help</li>
            <li>Status</li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>

          </ul>
      </div>
    </MDBFooter>

    </div>
  )
}

export default Footer