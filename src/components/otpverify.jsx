"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./formelements";
import Image from "next/image";
import { verifyAccount } from "@/client/authverify";

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
    <div className="flex flex-col lg:flex-row justify-center items-center bg-white shadow-xl rounded-xl md:px-10 w-full max-w-4xl">
      <div className="flex flex-row lg:flex-col justify-start items-center">
        <Image
          src="/Logo.png"
          alt="Image"
          width={500}
          height={500}
          className=" w-24 lg:w-64"
        />
        <h1 className=" text-xl text-center text-gray-800 font-semibold">
          Tiffin Service
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form flex flex-col px-10 py-4  w-full max-w-md"
      >
        <Input
          label={"Verify OTP"}
          name={"otp"}
          register={register}
          errors={errors}
          type="number"
          className="input"
        />
        <input type="submit" className="bg-green-400 p-2 rounded mt-10" />
      </form>
    </div>
  );
}
