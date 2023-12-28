import express from "express";
import { Register } from "../controllers/Register";

const router = express.Router();

router.post("/register", Register);

export default router;
