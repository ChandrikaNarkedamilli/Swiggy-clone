import React from 'react'
import {AppBar, Box, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material'
import swiggylogo from '../images/swiggylogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { BiSolidOffer } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <AppBar position='fixed' style={{backgroundColor :'white', height:'80px',justifyContent:'center', padding:'0px 90px 0px 90px'}} >
        <Toolbar>
          <Stack direction='row' spacing={3} alignItems='center'>
            <IconButton size='small' edge='start' style={{ width: 50, height: 50 ,marginRight:'5px'}}>
              <img src={swiggylogo} alt='SwiggyPartner' style={{ width: '100%', height: '60px' }} />
            </IconButton>
            <Typography variant='h6' sx={{fontSize:"16px", color:'black', fontWeight:600, flexGrow: 1}}>
              Location <IconButton alignItems='center' sx={{color:'black'}}> <KeyboardArrowDownIcon /> </IconButton>
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction='row'alignItems='flex-end' spacing={4}>
            <Button sx={{color:'black'}}>Swiggy Corporate</Button>
            <Button sx={{color:'black'}}>Search</Button>
            <Button sx={{color:'black'}}>Offers</Button>
            <Button sx={{color:'black'}}>Help</Button>
            <Button sx={{color:'black'}}>Sign In</Button>
            <Button sx={{color:'black'}}>Cart</Button>
          </Stack>         
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
