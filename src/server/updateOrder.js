import { ID } from "appwrite";
import db from "./db";

const updateOrder = async ({orderId, status}) => {
    try {
        const result = await db.updateDocument(
            '66dbd76a003a8e7085d5',
            '66e04af40014bd0c9773',
            orderId,
           { status },
        );
        await activatePlan(result);
        return {status: 'success', data: result}
    } catch (error) {
        return {status: 'failure', data: error}
    }
}
export default updateOrder

const activatePlan = async (order) =>{
    try {
        if(!order) throw new Error('order not found')
            console.log(order);
            
        const startDate = new Date(Date.now());
        const endDate =new Date(Date.now() + 30*24*60*60*1000);

        const plan = db.createDocument(
            '66dbd76a003a8e7085d5',
            '66e91b370018953d279a',
            ID.unique(),
            { 
                start: startDate.toISOString(),
                end: endDate.toISOString(),
                plan: [order.plan[0].$id],
                orders: order.$id,
                profile : order.profile[0].$id
            }
        )
        return {status: 'success', data: plan}
    } catch (error) {
        return {status: 'failure', data: error}
    }
}