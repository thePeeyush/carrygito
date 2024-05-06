import { default as account } from "./account.config";


export const verifyAccount = (props) => {
  const {otp,userID,setStatus,name,setCorrectOTP}= props;
    account.updatePhoneSession(userID, otp).then(
     function (response) {
      console.log('verification successful'); // Success
      setStatus('payment')
      setCorrectOTP(true)
      updatename(name);
    },
    function (error) {
      console.log('verification failed'); // Failure
      setCorrectOTP(false);
    }
  );
};

const updatename = async(name)=>{
  account.updateName(name).then(
        function (response) {
          console.log('name update done'); // Success
          
        },
        function (error) {
          console.log('name update fail'); // Failure
        }
      );
  }