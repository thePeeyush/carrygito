'use client'
import { useEffect, useState } from 'react'
import { checkout } from '../utility/order';
import verifyPayment from '../utility/verifyPayment';
import { useRouter, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const Checkout = () => {

  const plan = useSearchParams().get('plan');
  const router = useRouter();
  const [paymentFailed, setPaymentFailed] = useState(false)

  useEffect(() => {
    handleCheckout();
  }, [])

  const handleCheckout = async () => {
    const data = await checkout({ amount: plan })
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_ID,
      "amount": data?.order?.amount,
      "currency": "INR",
      "name": "Carrygito",
      "description": "Carrygito Tiffin Services",
      "image": "https://i.postimg.cc/cJx1nwnd/logo.jpg",
      "order_id": data?.order?.id,
      handler: async (Response) => {
        await verifyPayment(Response, data?.order?.id)
        router.push('/profile')
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
    paymentObject.on("payment.failed", (res) => {
      console.log("paymment failed", res)
      setPaymentFailed(true)
    });
  }
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {
        paymentFailed ? <h1 className="font-bold text-gray-900 text-3xl mx-2 mb-10">Payment Failed</h1> : (
          <div className="w-10 h-10 rounded-full border-2 border-black border-r-0 animate-spin mx-auto"></div>
        )
      }
    </>
  )
}

export default Checkout