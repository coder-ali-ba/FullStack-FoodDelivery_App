import express from "express";
import getAllRestaurantController from "../controllers/AdminControllers.js";
import { AdminAuthCheck } from "../MiddleWares/authMiddleWare.js";

const Adminrouter =express.Router()

Adminrouter.get("/allrestaurants" ,AdminAuthCheck , getAllRestaurantController)


export default Adminrouter