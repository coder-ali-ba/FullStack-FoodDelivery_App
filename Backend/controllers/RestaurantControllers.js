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
             isDeleted : !body.isDeleted
     }       
         const response = await rests.findByIdAndUpdate(id , updateObj)
        res.json({
           message : `Soft Delete Successfully`,
           data : response
        })  
    } catch (error) {
        res.json({
            message: "Something Went Wrong"
        })
    }
       
}

const editRestaurantController = async(req , res) => {
    const body = req.body;
    const id = req.params.id;
    const editData = await rests.findByIdAndUpdate(id , body , {new : true})
    try {
        
        res.json({
           data : editData,
           message : "Got Edit Api"
        })
    } catch (error) {
        
        res.json({
         data : null,
         message : "Can't Get Edit Api"
        })
    }
  
}

const openRestaurantController = async(req , res) => {
    const id = req.params.id
    const body = await rests.findById(id)
    const approval =body.isApproved

    if(!approval){
        return res.json({
            message : "Please wait for the Admins Approval"
        })
    }

    const updateObj ={
        isOpen : !body.isOpen
    }

    const updateApproval =await rests.findByIdAndUpdate(id , updateObj)

    res.json({
        data : updateApproval,
        message:"Your Restaurant Status is Changed "
    })
}

export {
    createRestaurantController,
    getRestaurantsController,
    deleteRestaurantController,
    editRestaurantController,
    openRestaurantController
}