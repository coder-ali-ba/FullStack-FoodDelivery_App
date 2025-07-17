import rests from "../models/RestaurantModel/restmodel.js"

const createRestaurantController =async(req , res)=>{
    try {
        const body = req.body
        const userId = req.user.id

        const userObj = {
           ...body,
           createBy : userId
        }

        const restaurants = await rests.create(userObj)

        res.json({
           message:"Created Successfully",
           data : restaurants
        })
        } catch (error) {
        res.json({
            message : "something went wrong"
        })
       }   
   
}

const getRestaurantsController = async (req , res)=>{
    
    const userId = req.user.id
    // const data =await rests.find({createBy : userId})
    // res.json({
    //     message : "got It",
    //     data : data
    // })
    try {
        const response = await rests.find({
          createBy : userId,
          isDeleted : false
        })
    res.json({
        status : true,
        message : "Success",
        data : response
    })
    } catch (error) {
        res.json({
            status : false,
            message : "something went wrong"
        })
    }    
    
}

const deleteRestaurantController = async(req , res) =>{
    try {
        const id =req.params.id;
        
        const body = await rests.findOne({_id : id});
        const updateObj = {
            ...body,
            isDeleted : !body.isDeleted
        }       
        // const response = await rests.findByIdAndUpdate(id , updateObj)
        res.json({
           message : `Got API `,
           data : updateObj
        })  
    } catch (error) {
        res.json({
            message: "Not Found"
        })
    }
       
}

export {
    createRestaurantController,
    getRestaurantsController,
    deleteRestaurantController
}