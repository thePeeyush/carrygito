"use client";

import Form from "@/components/form";
import Verification from "@/components/otpverify";
import { useState } from "react";
import Payment from "@/components/payment";
import Done from "@/components/done";

export default function Page() {
  const [submit, setSubmit] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [done,setDone] = useState(false);

  return (
    <div>
      {!submit && (
          <Form setSubmit={setSubmit} setIsVerified={setIsVerified} />
      )}

      {submit && !isVerified &&(
          <Verification setIsVerified={setIsVerified} />
      )}

      {isVerified && !done && (
          <Payment setDone={setDone}/>
      )}

      {done && (
          <Done/>
      )}

    </div>
  );
}
