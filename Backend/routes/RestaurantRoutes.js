import express from "express";
import AuthCheck from "../MiddleWares/authMiddleWare.js";
import { createRestaurantController, deleteRestaurantController, editRestaurantController, getRestaurantsController } from "../controllers/RestaurantControllers.js";

const restaurantRouter = express.Router()

restaurantRouter.post("/create" , AuthCheck ,  createRestaurantController)
restaurantRouter.get("/getall", AuthCheck ,  getRestaurantsController)
restaurantRouter.delete("/delete/:id" , AuthCheck , deleteRestaurantController)
restaurantRouter.put("/edit/:id" , AuthCheck , editRestaurantController)

export default restaurantRouter

