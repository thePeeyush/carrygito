"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./formelements";
import { verifyAccount } from "@/services/authverify";

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must only contain digits")
    .required("OTP is required"),
});

export default function Verification({ setIsVerified }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });
  const onSubmit = (data) => {
    verifyAccount(data,setIsVerified)
  };

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="form flex flex-col py-4 h-fit w-80 md:w-96"
      >
        <Input
          label={"Verify OTP"}
          name={"otp"}
          register={register}
          errors={errors}
          type="number"
          className="input text-center tracking-widest"
        />
        <button type="submit" className="bg-green-500 p-2 text-white rounded mt-10" >Verify OTP</button>
      </form>
  );
}
