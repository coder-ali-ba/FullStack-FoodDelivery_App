import React, { useEffect, useState } from 'react'
import Clientlayout from "../../../Components/LayoutComp/ClientLayout"
import axios from 'axios'
import { BASE_URL } from '../../../Utils/utility'
import endPoints from '../../../Constants/apiEndPoints'
import Cookies from "js-cookie"
import { Box, Button, Stack, Typography } from '@mui/material'
import SingleRestaurantComponent from '../../../Components/singleRestaurantComponent/singleRestaurantComponent'


function  ClientDashboard () {
  const [rests , setRests] = useState([])
  const [open , setOpen] = useState(false)
  const [id , setId]=useState()


 useEffect(()=>{
  getFunc()
 },[])


  const getFunc = async() =>{
      const allRestaurants = await axios.get(`${BASE_URL}${endPoints.getApprovedRestaurant}`,{
         headers : {
           Authorization : `Bearer ${Cookies.get("authToken")}`
         }
      })

     const{data} = allRestaurants.data
     setRests(data)
  }
  const handleOpen = (id) => {

    setOpen(true)
    setId(id)
  };
  
  
  
  return (
    <Clientlayout>
             {
              open && (<SingleRestaurantComponent  openClose={setOpen} restId={id}/>)
             }
            {!open && <div>
        <Typography align='center' variant='h6'>Restaurants</Typography>
      <Stack direction={"row"} flexWrap={"wrap"} sx={{ gap:"10px", justifyContent:"center"}}>
        {rests.map((rest , index)=>(
          <Box component={"button"} onClick={()=>handleOpen(rest.restaurantName)} key={index} sx={{display : "flex" , width:"350px",borderRadius:"5px", boxShadow:"3px 3px 3px 3px lightGray", padding:"10px"}}>
             <Box>
              <img src={rest.imageUrl} alt=""
                 width={"180px"}
              />
             </Box>
             <Box pl={"10px"} >
              <Typography mr={"10px"}>{rest.restaurantName}</Typography>
              <Typography mr={"10px"}>{rest.details}</Typography>
              <Typography mr={"10px"}>{rest.address}</Typography>
              <Typography mr={"10px"}>{rest.email}</Typography>             
             </Box>
             
          </Box>
             
        ))}
      </Stack>
      </div>}
             

    </Clientlayout>
  )
}


export default ClientDashboard
