import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api'
import { Alert, Box, Breadcrumbs, Button, Chip, Container, Divider, FormControlLabel, Link, Snackbar, Stack, Switch, TextField, Typography } from '@mui/material'


const ProductMenu = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([])


  const {firmId, firmName} = useParams() 
  
  const productsHandler = async()=>{
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`)
      const newProductData = await response.json()
      setProducts(newProductData.products)
      // setFilteredProducts(newProductData.products)
    } catch (error) {
      console.error('Error fetching the products',error)
    }
  }

  useEffect(()=>{
    productsHandler()
  },[])

  const categoryFilterHandler =(category)=>{
    setSelectedCategory(category)
  }

  const addToCartHandler=(item)=>{
    const existingItems = JSON.parse(localStorage.getItem('myItems') ?? '[]')
    const updatedItems = [...existingItems,item]
    localStorage.setItem('myItems',JSON.stringify(updatedItems))
    console.log('updated',updatedItems)
    setSnackbarMessage(`${item.productName} added to cart`);
    setSnackbarOpen(true);
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  return (
    <>
      <Box margin='20px 359px 0px 359px' className="product-menu-container">
        <Breadcrumbs separator='/' sx={{ fontSize: '10px' }} className="breadcrumb-links"> 
          <Link underline='hover' href='/' color='inherit'>Home</Link>
          <Link underline='hover' href='#' color='inherit'>Hyderabad</Link>
          <Link underline='hover' href='#' color='inherit'>{firmName}</Link>
        </Breadcrumbs>
      <Stack alignItems='center' className="menu-header">
        <Typography variant='h5'sx={{fontWeight: 700,mt:'40px',textTransform:'uppercase'}} className="menu-header">{firmName}</Typography>
        <Typography variant='h6'sx={{fontSize: '13px',mt:'40px',color:'#02060c99',paddingTop:'10px'}}  className="menu-subheader" >-- M E N U --</Typography><br/>
        <TextField fullWidth label='Search for dishes' variant="filled"  size='small' 
          InputProps={{ disableUnderline: true,}} sx={{borderRadius:'17px',borderBottom:'none',margin:'normal'}} className="search-bar"  />

        <Stack direction='row' spacing={2} alignItems='center' mt='15px' justifyItems='flex-start' className="switches">
          <FormControlLabel label='Veg' control={<Switch color='success' onClick={()=>setSelectedCategory('Veg')}  />}  />
          <FormControlLabel label='Non-Veg' control={<Switch color='error' onClick={()=>setSelectedCategory('Non-Veg')}   />} />
          <Chip label='Bestseller' sx={{color:'black', backgroundColor:'white',border:'1px solid gray',cursor:'pointer' }} />
        </Stack>  
        <Divider sx={{ width: '100%', mt:'13px'}} />

      </Stack>

        {products.filter(item => selectedCategory === '' || item.category.includes(selectedCategory.toLocaleLowerCase()))       
        .map((item)=>{
          
          return(
            <>
            <Stack alignItems='center' direction='row' spacing={8} width='800px' mt='36px' mb='36px' className="product-list" >
              <Stack alignItems='flex-start' className="product-item-details" width='552px' spacing={1}>
                <Typography variant='h6' sx={{color:'black',fontWeight:'600',fontSize:'18px'}} className="product-name">{item.productName}</Typography>
                <Typography variant='h6' sx={{color:'black',fontSize:'16px'}}>₹ {item.price}</Typography>
                <Typography variant='body1' sx={{color:'#02060c99',wordBreak:'break-word'}} className="product-description">{item.description}</Typography>
              </Stack>
              <Stack alignItems='center' className="product-item" >
              <img key={item._id} src={`${API_URL}/uploads/${item.image}`} alt={item.image}  className="product-item-image" style={{ width: '158px', height: '144px',cursor:'pointer',borderRadius:'17px',border:'1px solid lightgray' }} />
              <Button variant='contained' onClick={()=>addToCartHandler(item)} size='medium' sx={{'&:hover': {backgroundColor: 'lightgray'},width:'80px',mt:'-20px',color:'green',fontWeight:'800',backgroundColor:'white'}}>Add</Button>
              </Stack>
              
            </Stack>
            <Divider sx={{ width: '100%', mt:'13px'}} />
            </>
          )
        })}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ProductMenu
