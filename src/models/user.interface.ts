import { Document } from "mongoose";

interface userInterface extends Document {
  email: String;
  username: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;
}

export { userInterface };
