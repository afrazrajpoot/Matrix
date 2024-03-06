import React from 'react'
import Home2 from './app/pages/Home2'
import { Blogs } from './app/pages/Blogs/Blogs'
import { Our_work } from './app/pages/our-work/Our-work'
import { Brand_identity } from './app/pages/Blogs/brand-identity/Brand-identity'
import { Route, Routes } from 'react-router-dom'
import { Brand_collateral } from './app/pages/Blogs/Brand-collatreral/Brand-collateral'
import { Nav } from './app/components/Nav'
// import { Contact } from './app/components/Contact'
// import {Nav} from './app/pages/Nav'


const App = () => {
  return (
    <>
      {/* <Home2 /> */}
      {/* <Blogs /> */}
      {/* <Our_work /> */}
      {/* <Brand_identity /> */}
      {/* <Brand_collateral /> */}
      <Routes>
      <Route path='/' element={<Home2  />} />
      <Route path='/blogs' element={<Blogs />} />
   
      </Routes>
      
    </>
  )
}

export default App
