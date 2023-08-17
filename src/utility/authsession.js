import { getData } from "@/components/payment";
import { default as account } from "./account.config";
import { passData } from "./authverify";

export const createAccount = (data , setSubmit,setIsVerified) => {

  const promise = account.get();

  promise.then(function (response) {
      if (response.status === true) {
        getData(data);
        setSubmit(true);
        setIsVerified(true);
      } else {
        const phone = data.phone;
        const userID = "tasty" + phone;
      
        const promise = account.createPhoneSession(userID, `+91${phone}`);
      
        promise.then(
          function (response) {
            console.log(response); // Success
            passData(data);
            setSubmit(true);
          },
          function (error) {
            console.log(error); // Failure
          }
        );
      }
  }, function (error) {
      console.log(error); // Failure
      alert(error)
  });

};
