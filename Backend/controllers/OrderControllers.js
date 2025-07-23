 import orderModel from "../models/orderModels/orderModel.js"


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

export default placeOrder