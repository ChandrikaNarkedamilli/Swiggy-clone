import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { Box, Chip, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import useMediaQuery from '@mui/material/useMediaQuery';

const FirmCollections = () => {

  const [firmData, setFirmData] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('All')
  const isMobile = useMediaQuery('(max-width: 576px)');

  const firmDataHandler = async()=>{
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newFirmData = await response.json()
      setFirmData(newFirmData.vendors)

      console.log("firmData :",newFirmData)

    } catch (error) {
      alert('Firm data not fetched')
      console.error('firm data not fetched',error)
    }
  }

  useEffect(()=>{
    firmDataHandler()
  },[])

  const regionFilterHandler =(region)=>{
    setSelectedRegion(region)
  }
  

  return (
    <>
      <Box sx={{ width: '100%',marginTop:'60px'}} alignItems='center' className="firm-collections-container">
        <Typography variant="h5" sx={{color:'black', fontWeight:'600'}}>Restaurants with online food delivery in Hyderabad</Typography>
        <br/>
        <Stack direction='row' spacing={1} className="chips-container">
          <Chip label='Filter' icon={<IoFilter />} sx={{color:'black', backgroundColor:'white',border:'1px solid gray',cursor:'pointer' }} />
          <Chip label='Sort By' icon={<FaAngleDown />} sx={{color:'black', backgroundColor:'white',border:'1px solid gray',cursor:'pointer' }} />
          <Chip label='All' onClick={()=>setSelectedRegion('All')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='South-Indian' onClick={()=>setSelectedRegion('South-Indian')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='North-Indian' onClick={()=>setSelectedRegion('North-Indian')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='Chinese' onClick={()=>setSelectedRegion('Chinese')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='Bakery' onClick={()=>setSelectedRegion('Bakery')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='Italian' onClick={()=>setSelectedRegion('Italian')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
          <Chip label='Arabian' onClick={()=>setSelectedRegion('Arabian')} sx={{color:'black', backgroundColor:'white',cursor:'pointer',border:'1px solid gray' }} />
        </Stack>
        
        <ImageList cols={isMobile ? 1 : 4}  gap={6} className="image-list-container">

          {firmData.map((field)=>{  
            return field.firm.map((item)=>{
              if(selectedRegion === 'All' || item.region.includes(selectedRegion.toLocaleLowerCase())){

                  return(
                    <Link key={item._id} to={`/products/${item._id}/${item.firmName}`} style={{textDecoration:'none',color:'black'}} >
                    <Stack paddingLeft='20px'  key={item._id} className='image-list-stack' >
                      <Box sx={{ position: 'relative', width: '253px', height: '169px' }}  className="image-list-item">
                      <ImageListItem>
                        <img key={item._id} src={`${API_URL}/uploads/${item.image}`} alt={item.image}  onClick={() => selectFirmHandler(firm)} style={{ width: '253px', height: '169px',cursor:'pointer',borderRadius:'17px' }} />
                      </ImageListItem>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          background: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)',                 
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
                          maxWidth:'233px',
                        }}
                      >
                      {item.offer}
                      </Box>
                      </Box>

                      <ImageListItemBar
                        title={
                          <Typography sx={{fontSize: '18px',fontWeight:600,display: 'block',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',maxWidth: '250px'}}>{item.firmName}</Typography> 
                        }
                        subtitle={
                          <>
                          <Typography sx={{fontSize:'14px',color:'gray' }}>{item.area}</Typography>
                          <Typography sx={{color:'gray' ,display: 'block',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',maxWidth: '200px'}}>{item.region.join(', ')}</Typography>
                          </>
                        }
                        position="below"
                      /><br/>
                    </Stack>
                    </Link>
                  )
                
              }
            })
            return null
          })}
        </ImageList>
      </Box>
    </>
  )
}

export default FirmCollections
