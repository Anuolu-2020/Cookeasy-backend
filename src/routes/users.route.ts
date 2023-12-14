import express, { Router } from "express";
import { createUser, getUserData } from "../controllers/users.controller";

const userRoute: Router = express.Router();

userRoute.route("/").get(getUserData).post(createUser);

export { userRoute };
