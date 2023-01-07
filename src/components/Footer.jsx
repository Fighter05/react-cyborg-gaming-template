import React from 'react'

const Footer = () => {
  return (
    <div> 
        <footer className='bg-black text-white text-center py-10'>
            <p className='my-1'>Copyright © 2036 <span className='cursor-pointer transition ease-in-out duration-300 hover:text-pink'>Cyborg Gaming</span> Company. All rights reserved.</p>
            <p>Design: <span className='cursor-pointer transition ease-in-out duration-300 hover:text-pink'>TemplateMo</span></p>
        </footer>
    </div>
  )
}

export default Footer