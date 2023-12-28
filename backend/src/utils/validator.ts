import { check } from "express-validator";

export const validatorRegisterArray = () => {
  return [
    check("firstName", "First name is required. ").isString().escape(),
    check("lastName", "Last name is required. ").isString().escape(),
    check("email", "Email is required. ").isEmail().escape(),
    check("password", "Password with 6 or more character required. ")
      .isLength({ min: 6 })
      .escape(),
  ];
};

export const validatorAuthLogin = () => {
  return [
    check("email", "Email is required. ").isEmail().escape(),
    check("password", "Password with 6 or more character required. ")
      .isLength({ min: 6 })
      .escape(),
  ];
};
