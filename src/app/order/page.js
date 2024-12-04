"use client";

import Form from "@/components/form";
import Verification from "@/components/otpverify";
import Payment from "@/components/payment";
import Done from "@/components/Done"; 
import { userInteraction } from "../../../store/userdata";

export default function Page() {

  const {orderStatus} = userInteraction(s=>s)

  switch (orderStatus) {

    case'done': return <Done/>

    case 'payment': return <Payment/>

    case 'verification': return <Verification/>
  
    default: return <Form/>
  }

}
