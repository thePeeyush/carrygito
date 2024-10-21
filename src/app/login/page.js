'use client'

import Login from "@/components/Login"
import userData from "@/store/userdata"
import { useRouter, useSearchParams } from "next/navigation"

export default function Page(){
    const redirectURL = useSearchParams().get("redirect")
    const {authenticated} = userData(s=>s)
    const router = useRouter()

    if(!authenticated) return <Login/>
    router.push(redirectURL || "/profile");
}