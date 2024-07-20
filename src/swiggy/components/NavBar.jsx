import React, { useState } from 'react'
import {AppBar, Box, Button, Drawer, IconButton, Stack, TextField, Toolbar, Typography} from '@mui/material'
import swiggylogo from '../images/swiggylogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { BsCartDash } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import loginimg from '../images/loginimg.avif'

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar position='sticky' style={{backgroundColor :'white', height:'80px',justifyContent:'center', padding:'0px 90px 0px 90px'}} className='nav-bar' >
        <Toolbar>
          <Stack direction='row' spacing={3} alignItems='center'>
            <Link to='/'>
            <IconButton size='small' edge='start' style={{ width: 50, height: 50 ,marginRight:'5px'}}>
              <img src={swiggylogo} alt='SwiggyPartner' className='logo' style={{ width: '100%', height: '60px' }} />
            </IconButton>
            </Link>
            <Typography variant='h6' sx={{fontSize: { xs: '12px', md: "16px" }, color:'black', fontWeight:600, flexGrow: 1}}>
              Location <IconButton alignItems='center' sx={{color:'black'}} className='hide-on-mobile'> <KeyboardArrowDownIcon /> </IconButton>
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction='row' alignItems='flex-end' spacing={4}>
            <Button startIcon={<CgBox />} sx={{color:'black'}} className='hide-on-mobile' > Swiggy Corporate</Button>
            <Button startIcon={<SearchIcon />} sx={{color:'black'}} className='hide-on-mobile' > Search</Button>
            <Button startIcon={<BiSolidOffer />} sx={{color:'black'}} className='hide-on-mobile' > Offers</Button>
            <Button startIcon={<IoMdHelpBuoy />} sx={{color:'black'}} className='hide-on-mobile' >Help</Button>
            <Button startIcon={<IoPersonOutline />} className='button' onClick={()=>setIsDrawerOpen(true)} sx={{color: isLoggedIn ? '#fc8019' : 'black', fontWeight: isLoggedIn ? 'bold' : 'normal'}}>
              {isLoggedIn ? 'Chandrika' : 'Sign In'}
            </Button>
            <Link to='/cart'><Button startIcon={<BsCartDash />} className='button' sx={{color:'black'}} >Cart</Button></Link>
          </Stack>         
        </Toolbar>
      </AppBar>

      <Drawer open={isDrawerOpen} anchor='right' onClose={()=>setIsDrawerOpen(false)}>
        <Stack p={7} sx={{width:'462px',height:'375px'}} role='presentation' spacing={7} >
          <Stack direction='row' justifyContent='space-between' sx={{width:'362px'}} >
          <Stack>
          <Typography sx={{fontSize:'30px',color:'black'}}>Login</Typography>
          <Typography sx={{fontSize:'13px',color:'black'}}>or <Link to='#' style={{textDecoration: 'none', color:'#fc8019'}}>create an account</Link></Typography>
          </Stack>
          <img src={loginimg} alt='🍔' width='100px' height='100px' />
          </Stack>
          <Stack width='362px' height='172px' spacing={2}>
          <TextField label='Phonenumber' autoComplete='Phonenumber' fullWidth />
          <TextField label='Password' type='password' autoComplete='Password' fullWidth />
          <Button variant='contained' sx={{color:'white',backgroundColor:'#fc8019'}} width='inherit' onClick={handleLogin} >Login</Button>
          <Typography variant='body2' sx={{fontSize:'12px',color:'#686b78'}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</Typography>  
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

export default NavBar
