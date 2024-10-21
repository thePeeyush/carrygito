"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useRef, useEffect } from "react";
import LoadingBar from "./LoadingBar";
import userData from "../store/userdata";
import { updateSession } from "@/utility/authentication";
import { useRouter } from "next/navigation";
import useProfile from "@/hooks/useProfile";

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must only contain digits")
    .required("OTP is required"),
});

export default function OtpVerification() {
  const [loading, setLoading] = useState(false);
  const { userId, setAuthenticated} = userData((s) => s);
  useProfile();
  const { handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(otpSchema),
  });


  const onSubmit = async (data) => {
    setLoading(true);
    const res = await updateSession({ otp: data.otp, userId });
    if (res.status === "success") {
      setAuthenticated(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col py-4 h-fit w-80 md:w-96"
    >
      <Timer />
      <OTPInput length={6} setValue={(val) => setValue('otp', val)} />
      {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
      <button className="bg-green-500 p-2 h-11 text-white rounded mt-6 mx-auto w-full max-w-[250px] md:max-w-full">
        {loading ? <LoadingBar /> : "Verify OTP"}
      </button>
    </form>
  );
}

const OTPInput = ({ length, setValue }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  useEffect(() => {
    let otpValue = otp.join("");  // Combine the array into a single string
    setValue(otpValue);  // Update the form field with this value
  }, [otp, setValue]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <div className="flex items-center justify-between mx-auto w-full max-w-[250px] md:max-w-full">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          className="md:w-12 md:h-12 w-8 h-8 border-2 border-gray-300 rounded-md text-center lg:text-2xl font-semibold focus:outline-none"
        />
      ))}
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState([3, 0]);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime[0] === 0 && prevTime[1] === 0) {
          router.push("/");
          return [0, 0];
        } else if (prevTime[1] === 0) {
          return [prevTime[0] - 1, 59];
        } else {
          return [prevTime[0], prevTime[1] - 1];
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex justify-center w-full p-8 text-lg font-semibold text-gray-600">
      {time[0]} min {time[1]} sec
    </div>
  );
};
