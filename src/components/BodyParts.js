import { FaxRounded, SportsGymnastics, WindowRounded } from '@mui/icons-material'
import React from 'react'
import {Box, Stack, Typography} from "@mui/material"

import Icon from '../assets/icons/gym.png';

const BodyParts = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type = "button"
    alignItems="center"
    justifyContent = "bodyPart-card"
sx= {{
  borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        gap: '47px'
}}

onClick={() => {
  setBodyPart(item)
  window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
}}
    >
         <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
         <Typography fontSize="24px" fontWeight="bold" color="#3A1212" 
         textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyParts