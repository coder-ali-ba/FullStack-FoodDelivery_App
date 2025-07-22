import menuModel from "../models/menuModel/menuModal.js"

const getAllMenues = async(req , res) => {
    const id = req.user.id
    const response = await menuModel.find({createBy : id})
    res.json({
    message : "got Menu APi"  ,
    data : response
   })
}

const menuForAdmin = async (req , res ) => {
    const datas = await menuModel.find()
    res.json({
        message : "susskassfullyyyyyyy",
        data : datas
    })
}

const deleteMenu = async (req , res) => {
    const id =req.params.id
    const data =await menuModel.findByIdAndDelete(id)
    res.json({
        message : "got menu Delete",
        data : data
    })
}

const changeMenuStatus = async (req , res) => {
    const id = req.params.id
    const user = await menuModel.findById(id)
    const Updated = {
        isApproved :!user.isApproved
    }

    const updatedObj = await menuModel.findByIdAndUpdate(id , Updated, {new : true})
    res.json({
        message : "got status Api",
        data : updatedObj
    })
}

export { 
    getAllMenues,
    menuForAdmin,
    deleteMenu,
    changeMenuStatus
}