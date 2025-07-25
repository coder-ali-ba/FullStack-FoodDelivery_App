import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../Components/LayoutComp/AdminLayout'
import axios from 'axios'
import { BASE_URL } from '../../../Utils/utility'
import Cookies from 'js-cookie'
import endPoints from '../../../Constants/apiEndPoints'
import { Typography } from '@mui/material'

function Orders() {
  const [datas , setDatas] =useState([])

  useEffect(()=>{
         getAllOrders()
  })

  const getAllOrders = async() => {
    const response = await axios.get(`${BASE_URL}${endPoints.allOrders}`,{
      headers : {
        Authorization : `Bearer ${Cookies.get("authToken")}`
      }
    })
    
    const {data} = response.data
    setDatas(data)
  }

  return (
        <AdminLayout>
            <h1>Orders</h1>
            {
              datas.map((data , index)=>(
                <Typography>{data.totalPrice}</Typography>
              ))
            }
        </AdminLayout>    
  )
}

export default Orders
