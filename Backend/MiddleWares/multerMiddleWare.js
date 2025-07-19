import multer from "multer";

const storage = multer.diskStorage({
    destination : "./uploads",
    filename : (req , file , cb)=>{
        cb(null , `${new Date().getTime()}-${file.originalname}`)
    }
})

const upload = multer({
    storage : storage, 
    limits : {
        fileSize : 10 * 1024 * 1024
    }
})

export default upload