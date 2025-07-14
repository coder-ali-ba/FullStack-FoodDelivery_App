import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
// import BASE_URL from "../../Utils/utility.js"


const RestaurantCard = ({ restaurant }) => {
  const {
    restaurantName,
    details,
    contactNumber,
    address,
    email,
    category,
    isOpen,
    isApproved
  } = restaurant || {}

//   (useEffect(()=>{
//        getRestaurants()
//   }))()
//   const getRestaurants = async() => {
//     const response = await axios.get(`${BASE_URL}/`)
//   }

  return (


    <Card sx={{ maxWidth: 500, margin: '1rem auto', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {restaurantName}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {details}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1, mb: 2 }}>
          <Chip
            label={isOpen ? 'Open' : 'Closed'}
            color={isOpen ? 'success' : 'default'}
            icon={isOpen ? <CheckCircleIcon /> : <CancelIcon />}
          />
          <Chip
            label={isApproved ? 'Approved' : 'Pending'}
            color={isApproved ? 'primary' : 'warning'}
            icon={isApproved ? <CheckCircleIcon /> : <CancelIcon />}
          />
        </Stack>

        <Box sx={{ mt: 1 }}>
          <Typography variant="body2"><strong>Contact:</strong> {contactNumber}</Typography>
          <Typography variant="body2"><strong>Email:</strong> {email}</Typography>
          <Typography variant="body2"><strong>Address:</strong> {address}</Typography>
          <Typography variant="body2"><strong>Category:</strong> {category}</Typography>
        </Box>
      </CardContent>
    </Card>
 
  );
};

export default RestaurantCard;