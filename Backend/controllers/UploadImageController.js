import express, { json } from "express";
import { cloudinaryUploader } from "../Config/cloudinaryConfig.js";
import fs from "fs"

const UploadImageController = async(req , res) => {
    try {
        const filePath =req.files[0].path;
        const resImage =await cloudinaryUploader.upload(filePath)

        fs.unlink(filePath , (error , res)=>{

        })
       res.json({
           message : " Got Image Uploader",
           data : resImage

        })
    } catch (error) {
        res.json({
            message : error.message
        })
    }
    
}

export {
    UploadImageController
}