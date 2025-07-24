import express from "express";
import { placeOrder,  orderMultipleItems } from "../controllers/OrderControllers.js";
import { AuthCheck } from "../MiddleWares/authMiddleWare.js";


const orderRouter =express.Router()


orderRouter.post("/placeorder" ,AuthCheck , placeOrder)
orderRouter.post("/placemultipleorder" ,AuthCheck , orderMultipleItems)


export default orderRouter