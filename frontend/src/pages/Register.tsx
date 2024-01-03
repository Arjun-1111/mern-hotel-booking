import { SubmitHandler, useForm } from "react-hook-form";
import WrapperRL from "../utils/WrapperRL";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { useMutation } from "react-query";
import * as apiClient from "../api/client";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  // for password hiding and showing
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // react Query
  const mutations = useMutation(apiClient.register, {
    onSuccess: () => {
      console.log("register successfull");
    },
    onError: (error: Error) => {
      console.log(error?.message);
    },
  });

  //   submit handler ---inspired by react hook type declartion
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);

    mutations.mutate(data);
  };

  return (
    <WrapperRL>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <p className=" text-2xl font-bold capitalize mb-2">Create an Account</p>
        <div className="flex flex-col md:flex-row gap-5">
          <label className=" capitalize font-semibold text-sm text-gray-700 flex-1">
            First name:
            <input
              type="text"
              className="border rounded font-normal w-full p-[2px] pl-[4px]"
              {...register("firstName", {
                required: "*This field is required.",
              })}
            />
            {errors?.firstName && (
              <p className=" font-semibold text-xs text-red-700">
                {errors?.firstName?.message}
              </p>
            )}
          </label>
          <label className=" capitalize font-semibold text-sm text-gray-700 flex-1">
            Last name:
            <input
              type="text"
              className=" border rounded font-normal w-full p-[2px] pl-[4px]"
              {...register("lastName", {
                required: "*This field is required.",
              })}
            />
            {errors?.lastName && (
              <p className=" font-semibold text-xs text-red-700">
                {errors?.lastName?.message}
              </p>
            )}
          </label>
        </div>
        <label className=" capitalize font-semibold text-sm text-gray-700 flex-1">
          email:
          <input
            type="email"
            className=" border rounded font-normal w-full p-[2px] pl-[4px] "
            {...register("email", {
              required: "*This field is required.",
            })}
          />
          {errors?.email && (
            <p className=" font-semibold text-xs text-red-700">
              {errors?.email?.message}
            </p>
          )}
        </label>
        <label className=" capitalize font-semibold text-sm text-gray-700 flex-1">
          password:
          <div className="flex flex-row items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              className=" border rounded font-normal w-full p-[2px] pl-[4px]"
              {...register("password", {
                required: "*This field is required.",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters.",
                },
              })}
            />
            <button
              className=" absolute right-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
          </div>
          {errors?.password && (
            <p className=" font-semibold text-xs text-red-700">
              {errors?.password?.message}
            </p>
          )}
        </label>
        <label className=" capitalize font-semibold text-sm text-gray-700 flex-1">
          Confirm password:
          <input
            type="text"
            className=" border rounded font-normal w-full p-[2px] pl-[4px]"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "*This field is required.";
                } else if (watch("password") !== val) {
                  return "Your password do not match.";
                }
              },
            })}
          />
          {errors?.confirmPassword && (
            <p className=" font-semibold text-xs text-red-700">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </label>
        <span>
          <button
            type="submit"
            className=" capitalize rounded font-semibold bg-blue-600 text-white p-2 hover:bg-blue-500"
          >
            create Account
          </button>
        </span>
      </form>
    </WrapperRL>
  );
};
export default Register;
