"use client";

import Form from "@/components/form";
import Verification from "@/components/otpverify";
import { useState } from "react";

export default function Page() {
  const [submit, setSubmit] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!submit && (
        <div className=" bg-green-200 min-h-screen  lg:p-10 flex justify-center">
          <Form setSubmit={setSubmit} />
        </div>
      )}

      {submit && !isVerified &&(
        <div className=" bg-green-200 min-h-screen md:p-10 flex justify-center">
          <Verification setIsVerified={setIsVerified} />
        </div>
      )}

      {isVerified && (
        <div>
          <h1> done ............</h1>
        </div>
      )}
    </div>
  );
}
