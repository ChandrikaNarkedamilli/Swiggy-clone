// import React from 'react'
import { Container, Stack } from '@mui/material'
import ItemsDisplay from '../components/ItemsDisplay'
import NavBar from '../components/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>

      <NavBar />
      <Stack direction='row' width='auto' sx={{marginLeft:'150px' ,marginRight:'150px'}}>
      <Container sx={{height:'120px'}}>
      <ItemsDisplay />
      </Container>
      </Stack>    
      
      </ThemeProvider>
  )
}

export default LandingPage
