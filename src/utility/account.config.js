import { Client, Account } from "appwrite";

export const client = new Client();

const account = new Account(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) //  project ID
;

export default account;