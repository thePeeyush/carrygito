import { Client, Databases } from "node-appwrite";
const client = new Client();

client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);  
client.setKey(process.env.SERVER_KEY);

const db = new Databases(client);
export default db