import { Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const ValidateTokenResponseController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req?.userId;
    res.status(200).json({ code: 1, userId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: -1, message: "error" });
  }
};
