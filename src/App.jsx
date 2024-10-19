import './App.css'
import Hero from './component/2-Hero/Hero'
import Main from './component/3-Main/Main'
import Footer from './component/5-Footer/Footer'

import '@fortawesome/fontawesome-free/css/all.min.css';
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import ShowHeader from './component/ShowHeader/ShowHeader'
import Uses from './component/Uses/Uses'
import Project from './component/Project/Project'
import Contact from './component/4-Contact/Contact';





function App() {


  
 let createBrowser= createBrowserRouter([
  {path: "" ,element:<Layout/> ,children:[
  {index:true ,element:<ShowHeader/>} ,
  {path:"about", element:<About/>},
  {path:"uses", element:<Uses/>},
  {path:"project", element:<Project/>},
  {path:"hero", element:<Hero/>},
  {path:"main", element:<Main/>},
  {path:"contact", element:<Contact/>},
  {path:"footer", element:<Footer/>},
  

  
  ]}
  ])
  
  

  return (
    <>

<RouterProvider router={createBrowser}></RouterProvider>





      
    </>
  )
}

export default App
