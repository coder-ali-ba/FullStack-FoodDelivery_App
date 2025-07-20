import auths from "../models/userModel/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"





const signupController = async (req , res)=>{
    try {
        const body = req.body;
        const isExist = await auths.findOne({email : body.email})
        if(isExist){
           return res.json({
              status : false,
              message :"User ALready Exist"
           })
        }
        const pass =await bcrypt.hash(body.password , 10)
        const user = {...body , password : pass}

        const allUsers = await auths.create(user)

        res.json({
          status : true,
          message :"Signed Up Successfully",
          data : allUsers
        })
        
    } catch (error) {
        res.json({
              status : false,
              message :error.message
           })
    }
    
}

const loginController = async(req , res)=>{

try {
    const body = req.body
    const isExist = await auths.findOne({email : body.email})
    if(!isExist){
        return res.json({
            status : false,
            message: "Invalid emial or password"
        })}

    const isPass = await bcrypt.compare(body.password , isExist.password)
    if(!isPass){
        return res.json({
            status : false,
            message: "Invalid emial or password"
        })
    }
    
    const token = jwt.sign({id : isExist._id} , process.env.PRIVATEKEY)
    res.json({
        status : true,
        message : "Loged In Successfully",
        data : isExist,
        token : token
    })
        
} catch (error) {
        res.json({
            status: false,
            message : "Something went Wrong"
        })
}
}

export {
    signupController,
    loginController
}