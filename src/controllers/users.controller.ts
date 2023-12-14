import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/users.model";
import { userInterface } from "../models/user.interface";

export const getUserData = async (req: Request, res: Response) => {
  try {
    await userModel
      .find({})
      .then((user: userInterface[]) => {
        res.status(200).json({
          status: true,
          message: "Successfuly fetched users data",
          data: user,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("An error occured while fetching users");
      });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: userInterface = req.body;

    if (!user) {
      res.status(400).json({
        status: false,
        message: "Provide user data",
      });
    }

    await userModel
      .create(user)
      .then((user: userInterface) => {
        res.status(201).json({
          status: true,
          message: "Succesfully Created User",
          data: user,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("An error occured while creating users");
      });
  } catch (err) {
    console.log(err);
  }
};
