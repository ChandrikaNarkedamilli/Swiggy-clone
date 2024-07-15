import { Box, IconButton, Stack, Typography } from "@mui/material"
import React from 'react';
import Slider from 'react-slick';
import { itemData } from "../data"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

const ItemsDisplay = () => {



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
    slidesToShow: 7,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <>
      <Box className='items-display-container'  sx={{ width: '100%' ,height: '120px'}} alignItems='center' > 
      <Typography variant="h5" sx={{color:'black', fontWeight:'600'}} >Whats on your mind?</Typography>
        <Slider className="items-display-slider" {...settings}>
          {itemData.map((image, index) => (
            <Box key={index} sx={{ textAlign: 'center', padding: 1 }} className="slick-image">
              <img src={image.img} alt={image.label} style={{ width: '145px', height: '180px' }}  />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  )
}

export default ItemsDisplay
