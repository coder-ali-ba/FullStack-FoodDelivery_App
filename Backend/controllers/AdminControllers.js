import rests from "../models/RestaurantModel/restmodel.js"

const getAllRestaurantController = async(req , res)=> {
    const response =await rests.find({})
    res.json({
        message : " get all restaurants",
        data : response
    })

}

export default getAllRestaurantController