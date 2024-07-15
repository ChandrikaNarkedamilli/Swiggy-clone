import { Button, Drawer, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginimg from '../images/loginimg.avif'


const SignIn = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
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
          <Button variant='contained' sx={{color:'white',backgroundColor:'#fc8019'}} width='inherit'>Login</Button>
          <Typography variant='body2' sx={{fontSize:'12px',color:'#686b78'}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</Typography>  
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

export default SignIn
