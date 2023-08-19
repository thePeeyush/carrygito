import { getData } from "@/components/payment";
import { default as account } from "./account.config";

let userdata;
export const passData = async (data) => {
  userdata = await data;
};

export const verifyAccount = (data, setIsVerified,setCorrectOTP) => {
  const phone = userdata.phone;
  const userID = "tasty" + phone;
  const otp = data.otp;

  const promise = account.updatePhoneSession(userID, otp);

  promise.then(
    function (response) {
      console.log('done'); // Success
      setIsVerified(true);
      getData(userdata);
      updatename(userdata.fullname);
    },
    function (error) {
      console.log('fail'); // Failure
      setCorrectOTP(false);
    }
  );
};


const updatename = async(name)=>{

  const promise = account.updateName(name);

      promise.then(
        function (response) {
          console.log('done'); // Success
        },
        function (error) {
          console.log('fail'); // Failure
        }
      );
  }