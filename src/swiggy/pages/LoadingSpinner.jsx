import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IoFastFoodOutline } from "react-icons/io5";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        mt:'-250px'
      }}
    >
      <Stack alignItems='center'>
      <Box
          sx={{
            position: 'relative',
            width: '80px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IoFastFoodOutline style={{ fontSize: '50px', color: 'black' }} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '5px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              borderTop: '5px solid black',
              animation: 'spin 1s linear infinite',
            }}
          ></Box>
        </Box>
        <Typography variant='h5' sx={{marginTop: '20px', color: 'gray',}}>Looking for great food near you...</Typography>
      </Stack>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LoadingSpinner;