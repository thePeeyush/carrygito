import { ID, Databases, Query } from "appwrite";
import { getUser } from "./authentication";
import account, { client } from "./account.config";

const db = new Databases(client);
let userId = null;

const isUser = async () => {
    if (!userId) {
        try {
            userId = (await getUser()).data.$id;
        } catch (error) {
            throw error;
        }
    }
}

export const createProfile = async (data) => {
    try {
        await isUser();
        const profile = await getProfile();
        if (profile.status === 'success') throw new Error('profile already exists');

        const name = account.updateName(data.fullname);

        const address = await db.createDocument(
            '66dbd76a003a8e7085d5',
            '66e0563100242367651a',
            ID.unique(),
            { city: "Indore", address_line_1: data.address, address_line_2: data.area },
        )

        const res = await db.createDocument(
            '66dbd76a003a8e7085d5',
            '66dbd78f00070ea88be8',
            ID.unique(),
            { userId: userId, address: address.$id },
        );
        await Promise.all([name])
        return { status: 'success', data: res }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}

//return the profile of currently logged in user
export const getProfile = async () => {
    try {
        await isUser();
        const res = await db.listDocuments(
            '66dbd76a003a8e7085d5',
            '66dbd78f00070ea88be8',
            [
                Query.equal('userId', userId),
            ]
        );
        if (res.documents.length === 0) throw new Error('profile not found');
        return { status: 'success', data: res.documents[0] }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}

export const updateProfile = async (data) => {
    try {
        const profile = await getProfile();
        if (profile.status === 'failure') return { status: 'failure', data: 'profile not found' }

        const res = await db.updateDocument(
            '66dbd76a003a8e7085d5',
            '66e0563100242367651a',
            profile.data.$id,
            { city: "Indore", address_line_1: data.address, address_line_2: data.area },
        );
        return { status: 'success', data: res }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}

export const deleteProfile = async () => {
    try {
        const profile = await getProfile();
        if (profile.status === 'failure') return { status: 'failure', data: 'profile not found' }

        const res = await db.deleteDocument(
            '66dbd76a003a8e7085d5',
            '66e0563100242367651a',
            profile.data.$id
        );
        return { status: 'success', data: res }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}

export const createOrder = async (data) => {
    try {
        const profile = await getProfile();
        if (profile.status === 'failure') return { status: 'failure', data: 'profile not found' }

        console.log(typeof window)

        const plans = await db.listDocuments(
            '66dbd76a003a8e7085d5',
            '66e04783002937311dff',
            [
                Query.equal('price', Number(data.price)),
            ]
        );
        const plan = plans.documents[0];

        const res = await db.createDocument(
            '66dbd76a003a8e7085d5',
            '66e04af40014bd0c9773',
            data.orderId,
            { plan: [plan.$id], profile: [profile.data.$id] },
        );
        return { status: 'success', data: res }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}

export const getOrder = async (orderId) => {
    try {
        await isUser();
        const order = await db.getDocument(
            '66dbd76a003a8e7085d5',
            '66e04af40014bd0c9773',
            orderId
        )
        return { status: 'success', data: order }
    } catch (error) {
        return { status: 'failure', data: error }
    }
}