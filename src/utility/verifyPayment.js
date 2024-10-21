export default async function verifyPayment(Razorpay_response) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = Razorpay_response;

    const response = await fetch("/api/razorpay/verifyPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }),
    });

    if(!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
