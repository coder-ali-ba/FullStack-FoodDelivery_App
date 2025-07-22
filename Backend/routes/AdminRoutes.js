import express from "express";

import { AdminAuthCheck, AuthCheck } from "../MiddleWares/authMiddleWare.js";
import { getAllRestaurantController, restaurantApprovalController } from "../controllers/AdminControllers.js";

const Adminrouter =express.Router()

Adminrouter.get("/allrestaurants" ,AuthCheck , getAllRestaurantController)
Adminrouter.patch("/approve-restaurant/:id" ,AdminAuthCheck , restaurantApprovalController)


export default Adminrouter