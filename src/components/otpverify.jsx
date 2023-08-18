"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./formelements";
import { verifyAccount } from "@/utility/authverify";
import { useState } from "react";

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must only contain digits")
    .required("OTP is required"),
});

export default function Verification({ setIsVerified }) {
  const [btnClicked,setIsClicked] = useState(false);
  const [correctOTP, setCorrectOTP] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const onSubmit = (data) => {
     setIsClicked(true);
     const isVerified = verifyAccount(data,setIsVerified);
     setCorrectOTP(isVerified);
  };

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="form flex flex-col py-4 h-fit w-80 md:w-96"
      >
        <Input
          onClick={()=>{setIsClicked(false)}}
          label={"Verify OTP"}
          name={"otp"}
          register={register}
          errors={errors}
          type="number"
          className="input text-center tracking-widest"
        />
        {
           !correctOTP && btnClicked && <p className="text-sm text-center text-red-700 pt-2">wrong otp entered please retry.</p>
        }
        <button
          type="submit"
          className="bg-green-500 p-2 text-white rounded mt-10"
        >
          {
            btnClicked ?( <img className="mx-auto rounded-full" width={25} src="/loading.gif" alt="loading..." /> ):("Verify OTP")
          }
        </button>
      </form>
  );
}
