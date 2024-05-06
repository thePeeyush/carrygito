import { ID } from "appwrite";
import { default as account } from "./account.config";

export const createAccount = (props) => {
  const { setID, data, setStatus } = props

  //check if verified 
  account.get().then(
    function (response) {
      console.log(response); // Success
      setStatus('payment');
    },
    function (error) {
      console.log(error); // Failure

      //now create a phone verification process
      account.createPhoneSession(
        ID.unique()
        , `+91${data.phone}`).then(
          function (success) {
            console.log('done'); // Success
            setID(success.userId)
            setStatus('verification')
          },
          function (error) {
            console.log('fail',error); // Failure
          }
        );
    }
  );
};
