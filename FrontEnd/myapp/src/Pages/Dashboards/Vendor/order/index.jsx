import { useEffect } from 'react'
import VendorLayout from '../../../../Components/LayoutComp/VendorLayout'
import axios from 'axios'
import { BASE_URL } from '../../../../Utils/utility.js'
import endPoints from '../../../../Constants/apiEndPoints.js'
import Cookies from 'js-cookie'


function Order() {
  useEffect(()=>{
     getOrders()
  },[])

  const getOrders = async () => {
    const response = await axios.get(`${BASE_URL}${endPoints.orderTomyRest}`,{
      headers : {
        Authorization : `Bearer ${Cookies.get("authToken")}`
      }
    })
    console.log(response.data);
    
  }

  return (
    <VendorLayout>
        <h1>Order</h1>
    </VendorLayout>
    
  )
}

export default Order
