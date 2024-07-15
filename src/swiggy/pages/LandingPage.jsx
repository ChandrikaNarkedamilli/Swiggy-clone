// import React from 'react'
import { Container, Divider, Stack } from '@mui/material'
import ItemsDisplay from '../components/ItemsDisplay'
import NavBar from '../components/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RestaurantChains from '../components/RestaurantChains';
import FirmCollections from '../components/FirmCollections';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>

      <Stack width='auto' sx={{marginLeft:'150px' ,marginRight:'150px'}}>
      <Container sx={{height:'120px', marginTop:'40px'}}>
        <ItemsDisplay />
      </Container>
      <Divider sx={{ width: '100%' , marginTop:'150px'}} />
      <Container >
        <RestaurantChains />
      </Container>
      <Divider sx={{ width: '100%' , marginTop:'220px'}} />
      <Container >
        <FirmCollections />
      </Container>
      </Stack>    
      
      </ThemeProvider>
  )
}

export default LandingPage
