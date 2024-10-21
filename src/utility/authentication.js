import { ID } from "appwrite";
import account  from "./account.config";

export const createSession = async (props) => {
  const { data } = props
  try {
    const res = await account.createPhoneSession(ID.unique(), `+91${data.phone}`);
    return {status: 'success', data: res}
  } catch (error) {
    return {status: 'failure', data: error}
  }
}

export const updateSession = async (props) => {
  const {otp,userId}= props;
  try {
    const res = await account.updatePhoneSession(userId, otp);
    return {status: 'success', data: res}
  } catch (error) {
    return {status: 'failure', data: error}
  }
};

export const getUser = async () => {  
  try {
      const user = await account.get();
      return {status: 'success', data: user}
  } catch (error) {
      return {status: 'failure', data: error}
  }
}