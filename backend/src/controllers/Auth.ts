import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const AuthLoginController = async (req: Request, res: Response) => {
  try {
    // repeated same code in register -----------------
    const errors = validationResult(req);
    // if error found
    if (!errors.isEmpty()) {
      return res.status(400).json({ code: 0, message: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ code: 2, message: "Wrong Credentials" });
    }

    const ispasswordMatched = await bcrypt.compare(password, user.password);
    if (!ispasswordMatched) {
      return res.status(400).json({ code: 2, message: "Wrong Credentials" });
    }

    // same code written in register --------------------------------------------------------
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

    res.status(200).json({
      code: 1,
      message: { userId: user._id },
    });
  } catch (error) {
    res.status(500).json({
      code: -1,
      message: "Something went wrong!",
    });
  }
};
