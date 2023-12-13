import express, { Express } from "express";
import {
  apiWelcome,
  checkApiVersion,
} from "./middlewares/checkApiVersion.middleware";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v:version/", checkApiVersion);

app.get("/api/v:version/", apiWelcome);
