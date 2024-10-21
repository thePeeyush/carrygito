"use client";

import userData from "../../store/userdata";
import Plans from "@/components/Plans";
import ourPlans from "@/data/ourPlans.json";
import { useSearchParams } from "next/navigation";
import Login from "@/components/Login";
import Checkout from "@/components/Checkout";
import CreateProfile from "@/components/CreateProfile";


export default function Page() {
  const {authenticated, profile} = userData(s=>s);
  const plan = useSearchParams().get('plan');
  
  if(!plan) return <Plans ourPlans={ourPlans.Plans}/>
  if(!authenticated) return <Login/>
  if(!profile.address) return <CreateProfile/>
  return <Checkout/>
}
