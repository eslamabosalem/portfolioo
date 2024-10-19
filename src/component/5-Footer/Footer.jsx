import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
     <footer className='flex justify-between py-20'>
        <ul className=' flex gap-4  '>
        <Link to="/about">
            <li
               className="title" href="">
                About
              
            
            </li>
            </Link>
          
            <Link to="/project"
            
               className="title" href="project">
                Projects
              
            
            </Link>
            
            <Link to="/uses">
            <li    
               className="title" href="">
              Uses
              
            </li>
            </Link>

</ul>
<p>© 2024 Spencer Sharp. All rights reserved.</p>

     </footer>
        </>
    )
}

export default Footer
