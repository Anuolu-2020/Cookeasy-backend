import express, { Express } from "express";
import {
  apiWelcome,
  checkApiVersion,
} from "./middlewares/checkApiVersion.middleware";
import { logger } from "./utils/logging";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger());

app.use("/api/v:version/", checkApiVersion);

app.get("/api/v:version/", apiWelcome);
