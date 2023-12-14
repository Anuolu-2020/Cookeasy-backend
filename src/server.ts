import { app } from "./app";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected Successfully to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}/api/v1`);
});
