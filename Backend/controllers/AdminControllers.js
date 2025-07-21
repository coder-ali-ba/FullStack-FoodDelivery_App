import { response } from "express"
import rests from "../models/RestaurantModel/restmodel.js"

const getAllRestaurantController = async(req , res)=> {
    const response =await rests.find({})
    res.json({
        message : " get all restaurants",
        data : response
    })
}



const restaurantApprovalController = async (req , res) => {
    const id = req.params.id
    
    const response = await rests.findById(id);
    const approved = response.isApproved
    const updateObj = {
        isApproved : !approved
    }

    const updatedStatus=await rests.findByIdAndUpdate(id , updateObj , {new : true})
    res.json({
        message : 'got Approval Api',
        data:updatedStatus
    })
}



export{ 
    getAllRestaurantController,
    restaurantApprovalController
}

