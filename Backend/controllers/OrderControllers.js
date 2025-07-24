 import orderMultipleModel from "../models/orderModels/multipleOrderModel.js"
import orderModel from "../models/orderModels/orderModel.js"
import rests from "../models/RestaurantModel/restmodel.js"


const placeOrder = async(req , res)=>{
    const body = req.body
     const userId = req.user.id
     
     

     const createdBody ={
        ...body,
        placedBy : userId,
        status : "pending"
     }

     const createdOrder = await orderModel.create(createdBody)
    res.json({
        message : "api Hitssss",
        data : createdOrder
       
    })
}

const orderMultipleItems = async(req , res)=>{
    const body =req.body
    const id = req.user.id
    const obj ={
        ...body,
        status : "pending",
        orderedBy :id
    }
    const makeMultipleOrder = await orderMultipleModel.create(obj)
    res.json({
        message : "place Multiple",
        data :makeMultipleOrder
    })
}

const getMyOrders = async (req ,res) => {
    const id =req.user.id
    const myOrders = await orderMultipleModel.find({orderedBy : id})
    res.json({
        message : "got My orders",
        data : myOrders
    })
}

const ordersForVendor=async(req ,res) => {
    const vendorId = req.user.id;
    
    
    
    res.json({
        message : "got for Vendor",
    })
}

export {
     placeOrder,
     orderMultipleItems,
     getMyOrders ,
     ordersForVendor
}