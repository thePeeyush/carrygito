import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_KEY,
}); 

export async function POST(request) {
  const {amount} = await request.json();
  try {
    const options = {
        amount: amount*100,
        currency: "INR",
    };
    const order = await razorpay.orders.create(options);
    return NextResponse.json({ message: "OK", order }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}