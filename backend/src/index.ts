import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req: Request, res: Response) => {
  res.json("hello from api");
});

app.listen(7000, () => {
  console.log("app is listining");
});
