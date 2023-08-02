import { default as account } from "./account.config";
import { setUserData } from "./setUserData";

let userdata = {};
export const passData = (data) => {
  userdata = data;
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
      setUserData(userdata);
    },
    function (error) {
      console.log(error); // Failure
    }
  );

};
