import { getData } from "@/components/payment";
import { default as account } from "./account.config";

let userdata;
export const passData = async(data) => {
  userdata = await data;
};

export const verifyAccount = (data,setIsVerified) => {

  const phone = userdata.phone;
  const userID = "tasty" + phone;
  const otp = data.otp;

  const promise = account.updatePhoneSession(userID, otp);

  promise.then(
    function (response) {
      console.log(response); // Success
      setIsVerified(true);
      getData(userdata);
    },
    function (error) {
      console.log(error); // Failure
    }
  );

};
