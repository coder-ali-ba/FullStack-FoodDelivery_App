import express from "express";
import AuthCheck from "../MiddleWares/authMiddleWare.js";
import { createRestaurantController, getRestaurantsController } from "../controllers/RestaurantControllers.js";

const restaurantRouter = express.Router()

restaurantRouter.post("/create" , AuthCheck ,  createRestaurantController)
restaurantRouter.get("/getall", AuthCheck ,  getRestaurantsController)


export default restaurantRouter

