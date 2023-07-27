import { Permission, Role } from "appwrite";
import { default as account } from "./account";
import databases from "./database";

export const setUserData = (data) => {
  const promise = account.updateName(data.fullname);
  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );

//   const phone = data.phone;
//   const userID = "tasty" + phone;

//   const datapromise = databases.createDocument(
//     "64b98fe1b44b70bb0d02",
//     "64b98ff680e1cb9c32f1",
//     userID,
//     {data},
//     [
//         Permission.create(Role.user(userID,'verified'))
//     ]
//   );

//   datapromise.then(
//     function (response) {
//       console.log(response); // Success
//     },
//     function (error) {
//       console.log(error); // Failure
//     }
//   );
};
