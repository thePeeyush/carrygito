import { getOrder } from "@/utility/database"
import { useState } from "react"

const Order = ({orderID,orderStatus}) => {
  const [plan , setPlan] = useState(null)
  useState(async () => {
    const order = await getOrder(orderID)
    if(order.data?.plan?.length > 0) setPlan(order.data?.plan[0])
    return () => {
        setPlan(null)
    }
  },[])
  return (
    <div className='flex gap-8 p-4 rounded-md w-full bg-gray-50 flex-wrap shadow-sm'>
        <h1 className={`text-xl font-semibold ${orderStatus === 'paid' && 'text-green-500'} ${orderStatus === 'pending' && 'text-yellow-500'} ${orderStatus === 'failed' && 'text-red-500'}`}>{orderStatus}</h1>
        <div>
            {
                plan && Object.entries(plan).filter(([key, value]) => !key.startsWith('$')).map(([key, value]) => {
                    return <p key={key}> {key} : {value}</p>
                })
            }
        </div>
    </div>
  )
}

export default Order