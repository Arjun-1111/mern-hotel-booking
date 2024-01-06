import express from "express";
import { validatorAuthLogin } from "../utils/validator";
import { AuthLoginController } from "../controllers/Auth";
import { ValidateTokenResponseController } from "../controllers/ValidateTokenResponseController";
import { validateToken } from "../middlewares/validateToken";

const router = express.Router();

router.post("/login", validatorAuthLogin(), AuthLoginController);
router.get("/validate-token", validateToken, ValidateTokenResponseController);

export default router;
