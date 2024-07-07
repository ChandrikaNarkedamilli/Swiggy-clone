import React from 'react'
import './App.css'
import './index.css'; 
import NavBar from './swiggy/components/NavBar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './swiggy/pages/LandingPage'  


const App = () => {
  return (
    <>
      <LandingPage />
      {/* <Routes>
        <Route to='/' element='' />
      </Routes> */}
    </>
  )
}

export default App
