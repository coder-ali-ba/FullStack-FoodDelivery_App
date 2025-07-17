import express from "express";
import AuthCheck from "../MiddleWares/authMiddleWare.js";
import { createRestaurantController, deleteRestaurantController, getRestaurantsController } from "../controllers/RestaurantControllers.js";

const restaurantRouter = express.Router()

restaurantRouter.post("/create" , AuthCheck ,  createRestaurantController)
restaurantRouter.get("/getall", AuthCheck ,  getRestaurantsController)
restaurantRouter.delete("/delete/:id" , AuthCheck , deleteRestaurantController)

export default restaurantRouter

