import React from 'react'
import './App.css'
import './index.css'; 
import NavBar from './swiggy/components/NavBar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './swiggy/pages/LandingPage'  
import ProductMenu from './swiggy/components/ProductMenu';
import MyAccount from './swiggy/components/MyAccount';
import CartPage from './swiggy/components/CartPage';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });

// const globalStyles = (
//   <GlobalStyles
//     styles={(theme) => ({
//       body: {
//         [theme.breakpoints.down('sm')]: {
//           backgroundColor: 'lightblue',
//           fontFamily: 'Arial, sans-serif',
//         },
//       },
//       a: {
//         [theme.breakpoints.down('sm')]: {
//           textDecoration: 'underline',
//           color: 'blue',
//         },
//       },
//       button: {
//         [theme.breakpoints.down('sm')]: {
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '14px',
//         },
//       },
//       // Add more global styles for mobile view as needed
//     })}
//   />
// );

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    // <CssBaseline />
    // {globalStyles}
      <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
      </>
    // </ThemeProvider>
  )
}

export default App
