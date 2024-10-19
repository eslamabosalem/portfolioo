import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../5-Footer/Footer'
import Header from '../1-Header/Header.jsx'


function Layout() {
     useEffect((()=>{

window.addEventListener("scroll",()=>{
  if (window.scrollY > 300) {
    setshowScrollBTN(true);
  } else {
    setshowScrollBTN(false);
  }
  
  
})

 }))
 const [showScrollBTN, setshowScrollBTN] = useState(false);



    return (
        <>

<div id='up' className=" container  ">

    <Header/>
<Outlet/>
<Footer/>
<a style={{opacity :showScrollBTN? 1:0, transition:"3s"}} href="#up"><button className='scroll2top'>
  <i className="fa-solid fa-chevron-up"></i>
  </button></a>
</div>
        </>
    )
}

export default Layout
