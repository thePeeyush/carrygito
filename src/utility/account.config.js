import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // API Endpoint
    .setProject('64b9872f5ef6ab5733ab') //  project ID
;

export default account;