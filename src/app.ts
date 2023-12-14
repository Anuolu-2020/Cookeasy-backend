import express, { Express } from "express";
import {
  apiWelcome,
  checkApiVersion,
} from "./middlewares/checkApiVersion.middleware";
import { logger } from "./utils/logging";
import { userRoute } from "./routes/users.route";
export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger()); // logging

app.use("/api/v:version/", checkApiVersion);
app.use("/api/v:version/users", userRoute); //user routes

app.get("/api/v:version/", apiWelcome); // Api home endpoint
