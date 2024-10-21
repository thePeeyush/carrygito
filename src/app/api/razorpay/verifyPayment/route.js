import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import updateOrder from "@/server/updateOrder";
export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = createHmac("sha256", process.env.RAZORPAY_KEY)
      .update(body)
      .digest("hex");

    const isVerified = expectedSignature === razorpay_signature;
    const updated = await updateOrder({ orderId: razorpay_order_id, status: isVerified ? "paid" : "failed" });

    
    if(updated.status !== "success") throw new Error("Order update failed");
    if(!isVerified) throw new Error("Payment verification failed");

    return NextResponse.json({ message: "OK", isVerified }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
