import { Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cartimage from '../images/cartimage.png'
import LandingPage from '../pages/LandingPage'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from '@mui/lab'
import  { timelineItemClasses } from '@mui/lab/TimelineItem';
import { API_URL } from '../api'
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartPage = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    const storedCartItems = JSON.parse(localStorage.getItem('myItems') ?? '[]')
    setCartItems(storedCartItems)
    console.log('these are cart items stored',storedCartItems)
    document.body.style.backgroundColor = '#e9ecee'
    return () => {
      document.body.style.backgroundColor = ''
    }
  },[])

  const removeFromCart =(item)=>{
    const updatedCart = cartItems.filter((cartItem)=> cartItem !== item)
    localStorage.setItem('myItems', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
  }

  return (
    <>
    {cartItems.length === 0 ? (
      <Stack alignItems='center' spacing={2} display='flex' >
        <img src={cartimage} alt='🛒' width='271px' height='210px'  />
        <Typography variant='h6'>Your cart is empty</Typography>
        <Typography variant='body2' sx={{fontSize:'13px', color:'#7e808c'}}>You can go to home page to view more restaurants near you</Typography>
        <Link to='/' style={{ textDecoration: 'none' }}><Button variant='contained' size='medium' sx={{color:'white', backgroundColor:'#fc8019',width:'255px'}}>SEE RESTAURANTS NEAR YOU</Button></Link>
      </Stack>
    ):(
    <Stack direction="row" alignItems='center' spacing={6} >


        <Stack display='flex' sx={{width:'804px'}}>
          <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding:9
            },
          }} >
            <TimelineItem >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack spacing={2} sx={{backgroundColor:'white'}} padding='35px 40px 39px' >
                  <Typography variant='h6' sx={{color:'black',fontWeight:'700',fontSize:'18px'}}>Logged in</Typography>
                  <Typography variant='h6' sx={{color:'black',fontSize:'16px'}}>Chandrika Narkedamilli | 9998880077</Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              <Stack spacing={2} sx={{backgroundColor:'white'}} padding='35px 40px 39px'>
                  <Typography variant='h6' sx={{color:'black',fontWeight:'700',fontSize:'18px'}}>Delivery address</Typography>
                  <Paper  padding='23px 57px 29px 30px' sx={{width:'auto', height:'auto'}}>
                    <IconButton><IoLocationOutline /></IconButton>
                    <Stack padding='0px 30px 29px 57px'>
                      <Typography variant='h6' sx={{color:'black'}}>PG</Typography>
                      <Typography variant='h6' sx={{color:'#93959f', fontSize:'13px'}}>Room D7, APHB Colony, Gachibowli, Hyderabad, Telangana 500032, India</Typography>
                      <Typography variant='h6' sx={{color:'black', fontWeight:600,fontSize:'14px'}}>26 mins</Typography>
                    </Stack>
                  </Paper>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Stack spacing={2} sx={{backgroundColor:'white'}} padding='35px 40px 39px'>
                  <Typography variant='h5' sx={{color:'black',fontWeight:'700',fontSize:'18px'}}>Choose payment method</Typography>
                  <Button variant='contained' color='success'>PROCEED TO PAY</Button>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Stack>

        
        <Stack spacing={1} sx={{backgroundColor:"white",padding:"10px"}}>

          
            {cartItems.map((item,index)=>(
                
                        <Stack key={index} sx={{width:'360px',padding:'1px 30px'}}>       
                          <Stack spacing={3} direction='row' sx={{width:'310px'}} alignItems='center' justifyContent='space-between' >
                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.image} width='80px' height='80px' />
                            <Stack>
                              <Typography sx={{fontSize:'15px',fontWeight:'600',color:'black'}}>{item.productName}</Typography>
                              <Typography sx={{fontSize:'13px',fontWeight:'600',color:'black'}}>₹ {item.price}</Typography>
                            </Stack>
                            <IconButton size='large' onClick={()=>removeFromCart(item)}><IoIosCloseCircleOutline /></IconButton>
                          </Stack>
                            <Divider sx={{ width: '100%', mt:'13px'}} />
                        </Stack>
                        
                )
              )
            } 

          <Stack spacing={1} padding='0px 20px 0px 35px'>
                <Typography variant='h6' sx={{color:'black' ,fontSize:'16px',fontWeight:'700'}}>Bill details</Typography>
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>Item Total</Typography>
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>₹614</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>Delivery Fee</Typography>
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>₹44</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>Extra discount for you</Typography>
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>-₹25</Typography>
                </Stack>
                <Divider sx={{ width: '100%', mt:'13px'}} />
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>Delivery Tip</Typography>
                  <Typography variant='h6' sx={{color:'red' ,fontSize:'13px'}}>Add tip</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>Platform fee</Typography>
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>₹5</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>GST and Restaurant Charges</Typography>
                  <Typography variant='h6' sx={{color:'#686b78' ,fontSize:'13px'}}>₹68.90</Typography>
                </Stack>
                <Divider sx={{ width: '100%', mt:'13px',height:'7px'}} />
                <Stack direction='row' justifyContent='space-between' >
                  <Typography variant='h6' sx={{color:'black' ,fontWeight:'700',fontSize:'15px'}}>TO PAY</Typography>
                  <Typography variant='h6' sx={{color:'black' ,fontWeight:'700',fontSize:'15px'}}>₹680</Typography>
                </Stack>
          </Stack>


        </Stack>
        
      
    </Stack>
    )}
    </>
  )

}

export default CartPage
