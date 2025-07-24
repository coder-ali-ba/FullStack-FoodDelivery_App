import express from "express";
import { placeOrder,  orderMultipleItems, getMyOrders, ordersForVendor } from "../controllers/OrderControllers.js";
import { AuthCheck } from "../MiddleWares/authMiddleWare.js";


const orderRouter =express.Router()


orderRouter.post("/placeorder" ,AuthCheck , placeOrder)
orderRouter.post("/placemultipleorder" ,AuthCheck , orderMultipleItems)
orderRouter.get("/myOrders/:id" , AuthCheck , getMyOrders)
orderRouter.get("/orderForvendor" , AuthCheck , ordersForVendor)


export default orderRouter