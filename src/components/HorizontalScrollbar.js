import React from 'react'
import { Box } from '@mui/material'
import BodyParts from './BodyParts'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import ExercisesCard from './ExercisesCard'


const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
   
    <ScrollMenu>
      {data.map((item) => 
      <Box
      key ={item.id || item}
      itemID ={item.id || item}
      title ={item.id || item}
      m = "0 40px"
      >
       {isBodyParts ? <BodyParts item={item} bodyPart= {bodyPart}
       setBodyPart = {setBodyPart} /> 
       : <ExercisesCard exercise={item} />
       }
      </Box>
      )
      }
    </ScrollMenu>
     

    
  )
}

export default HorizontalScrollbar