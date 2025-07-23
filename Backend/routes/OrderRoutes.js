import express from "express";
import placeOrder from "../controllers/OrderControllers.js";
import { AuthCheck } from "../MiddleWares/authMiddleWare.js";


const orderRouter =express.Router()


orderRouter.post("/placeorder" ,AuthCheck , placeOrder)


export default orderRouter