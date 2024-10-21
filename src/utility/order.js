import { createOrder } from "./database";

export async function checkout(body) {
    try {
      const response = await fetch(`/api/razorpay/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      await createOrder({price: body.amount, orderId: result.order.id});
      return result;
    } catch (error) {
      console.error("Fetch POST error:", error);
      throw error;
    }
  }
