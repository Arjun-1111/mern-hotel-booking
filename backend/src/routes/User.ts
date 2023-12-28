import express from "express";
import { Register } from "../controllers/Register";
import { validatorRegisterArray } from "../utils/validator";

const router = express.Router();

router.post("/register", validatorRegisterArray(), Register);

export default router;
