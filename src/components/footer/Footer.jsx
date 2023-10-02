import React from 'react'
import "../../style/footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <h2 className='footer-heading'>
               QuickBite
            </h2>
            <ul>
                <li><Link to={'/myaccount'} className='links'>MyAccount</Link></li>
                <li><Link to={'/order'} className='links'>Order Status</Link></li>
                <li><Link to={'/rewards'} className='links'>Rewards</Link></li>
                <li><Link to={'/subscription'} className='links'>Subscription</Link></li>
            </ul>
        </div>
        <div className="container">
            <h2 className='footer-heading'>
                Services
            </h2>
        </div>
        <div className="container">
            <h2 className='footer-heading'>
                Get in touch
            </h2>

        </div>
        <div className="container">
            <h2 className='footer-heading'>
                Social
            </h2>
        </div>
    </div>
  )
}

export default Footer