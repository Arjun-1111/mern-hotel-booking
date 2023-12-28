import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoute from "./routes/User";
import UserAuth from "./routes/auth";

const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);

app.get("/test", (req, res) => {
  res.json("working");
});
app.use("/api/auth", UserAuth);
app.use("/api/users", UserRoute);

app.listen(7000, () => {
  console.log("app is listining");
});
