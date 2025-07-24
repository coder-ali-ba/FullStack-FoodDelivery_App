import { Stack, Typography } from '@mui/material'
import React from 'react'

function OrderSlip({chosedItems}) {

    
    
  return (
    <div>
      <Stack>
        {chosedItems.map((item)=>(
            <Typography>{item}</Typography>
        ))}
      </Stack>
    </div>
  )
}

export default OrderSlip
