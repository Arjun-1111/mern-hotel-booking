import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);

app.get("/api/test", (req: Request, res: Response) => {
  res.json("hello from api");
});

app.listen(7000, () => {
  console.log("app is listining");
});
