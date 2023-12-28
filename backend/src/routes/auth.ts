import express from "express";
import { validatorAuthLogin } from "../utils/validator";
import { AuthLoginController } from "../controllers/Auth";

const router = express.Router();

router.post("/login", validatorAuthLogin(), AuthLoginController);

export default router;
