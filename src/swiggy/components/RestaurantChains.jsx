import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box, IconButton, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material';
import { API_URL } from '../api';
import LoadingSpinner from '../pages/LoadingSpinner';
import { Link } from 'react-router-dom';
import '../../App.css'

const RestaurantChains = () => {

  const [vendorData, setVendorData] = useState([])
  const [loading, setLoading] = useState(true)

  const vendorFirmHandler = async()=>{
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newData = await response.json()
      setVendorData(newData)
      console.log('This is vendor data',newData)
      setLoading(false)
    } catch (error) {
      alert('Failed to fetch data')
      console.error('Failed to fetch data',error)
      setLoading(true)
    }
  }

  useEffect(()=>{
    vendorFirmHandler()
  },[])

  
  const NextArrow = ({ onClick }) => (
    <IconButton onClick={onClick} style={{ position: 'absolute', right: '-30px', top: '40%', zIndex: 2 }}>
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton onClick={onClick} style={{ position: 'absolute', left: '-30px', top: '40%', zIndex: 2 }}>
      <ArrowBackIosIcon />
    </IconButton>
  );

  const settings = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    {loading && <>
      <LoadingSpinner  />
    </>}
      <Box sx={{ width: '100%',marginTop:'50px'  ,height: '120px'}} alignItems='center' className="restaurant-chains-container">
        <Typography variant="h5" sx={{color:'black', fontWeight:'600'}}>Top Restaurant Chains in Hyderabad</Typography>
        <Slider {...settings} className='restaurant-chains-slider'>
          {vendorData.vendors && vendorData.vendors.map((vendor)=>{
            // <Box sx={{ textAlign: 'center', padding: 1 }}>
              return(
                <>
                  <Box sx={{textAlign: 'center', padding: 3}}>
                  {vendor.firm.map((item)=>{
                  return(
                    <>
                    <Link to={`/products/${item._id}/${item.firmName}`} style={{textDecoration:'none',color:'black'}}>
                    <Box sx={{ position: 'relative', width: '273px', height: '183px' }}>
                    <img key={item._id} className="slick-image" src={`${API_URL}/uploads/${item.image}`} alt={item.image} style={{ width: '273px', height: '182px',cursor:'pointer',borderRadius:'17px' }} />
                    <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          background: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)',                 
                          // backgroundColor: 'rgba(0, 0, 0,1)',
                          color: 'white',
                          padding: '10px 10px',
                          borderBottomLeftRadius:'17px',
                          borderBottomRightRadius:'17px',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          overflow: 'hidden',
                          textOverflow:'ellipsis',
                          whiteSpace:'nowrap',
                          textTransform:'uppercase',
                          width:'100%',
                          maxWidth:'254px',
                        }}
                      >
                      {item.offer}
                      </Box>
                    </Box>
                    
                    <Box>
                    <Typography variant='h6' sx={{fontSize:'18px'}}>{item.firmName}</Typography>
                    <Typography  sx={{fontSize:'16px',color:'gray'}}>{item.region.join(', ')}</Typography>
                    <Typography  sx={{fontSize:'16px',color:'gray'}}>{item.area}</Typography>
                    </Box>
                    </Link>
                    </>
                    
                  )

                  })}
                  </Box>
                </>
              )
            // </Box>
          })}
        </Slider>
      </Box>
    </>
  )
}

export default RestaurantChains
