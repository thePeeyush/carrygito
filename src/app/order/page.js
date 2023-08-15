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
          <Form setSubmit={setSubmit} />
      )}

      {submit && !isVerified &&(
          <Verification setIsVerified={setIsVerified} />
      )}

      {isVerified && (
          <h1> done ............</h1>
      )}
    </div>
  );
}
