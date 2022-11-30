import React from 'react'

const Footer = () => {

  const curr_year = new Date().getFullYear()

  return (
    <div className='footer' >
        <p className='footer-text' >©{curr_year} Copyright All rights reserved by iView Labs</p>
    </div>
  )
}

export default Footer