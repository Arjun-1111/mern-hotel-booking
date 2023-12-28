import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const Register = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ code: 0, message: "user already exists" });
    }
    // if  user not found

    user = new User(req.body);
    await user.save();

    //   creating jwt token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    // setting httpOnly cookie

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000, //1day same as jwt expiry
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: -1,
      message: "Something went wrong!",
    });
  }
};
