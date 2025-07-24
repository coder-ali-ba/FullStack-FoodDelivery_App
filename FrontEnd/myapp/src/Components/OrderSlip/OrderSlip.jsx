import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../Utils/utility';
import endPoints from '../../Constants/apiEndPoints';
import Cookies from 'js-cookie';


function OrderSlip({ menu }) {

  // console.log(menu);
  
  const totalPrice = menu.reduce((sum, item) => {
  const price = parseFloat(item.itemPrice);
  return sum + price;
}, 0);
  
// const [{itemDesc , itemName , itemPrice},] = [...menu]

// console.log(itemDesc , itemName , itemPrice);

// menu.foreach(())


const handlePlaceOrder = async() => {
  const response = await axios.post(`${BASE_URL}${endPoints.multipleOrders}`,{},{
    headers : {
      Authorization : `Bearer ${Cookies.get("authToken")}`
    }
  })
  
  console.log(response);
  
}
  
    
    
    
  return (
    <div>
      <Stack>
        

        <TableContainer component={Paper} sx={{padding:"10px"}}>
          <Typography align='center' variant='h5' sx={{backgroundColor:"#076aebff", color:"white"}}>Sale Reciept</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Item Description</strong></TableCell>
            <TableCell><strong>Item Name</strong></TableCell>
            <TableCell><strong>Item Price</strong></TableCell>
            <TableCell><strong>Restaurant Name</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.itemDesc}</TableCell>
              <TableCell>{row.itemName}</TableCell>
              <TableCell>{row.itemPrice}</TableCell>
              <TableCell>{row.restaurantName}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
        
      </Table>
      <Box align="center">
        <Typography>Total = {totalPrice} </Typography>
        <Button variant="contained" onClick={handlePlaceOrder}>Order</Button>
      </Box>
      
    </TableContainer>
        
      </Stack>
    </div>
  )
}

export default OrderSlip
