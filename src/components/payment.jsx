import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// let userdata = {
//   fullname:"fasfasfs",
//   phone:"115456586",
//   area:"dgfdgdsg",
//   address:"dfdgd ag,sdfs dfdsfgds gdrgdgds dsfadsfasgasgasgadrgadrgdagadg",
//   plan:"5484/-"
// };
let userdata;
export const getData = async (data) => {
  userdata = await data;
};

export default function Payment({ setDone }) {
  const [btnClicked, setIsClicked] = useState(false);
  const [pass,setPass] = useState(true);

  const { phone, fullname, area, address, plan } = userdata;
  const walink = `https://wa.me/+918989599699?text=Fullname%20%3A%20${encodeURIComponent(
    fullname
  )}%0APhone%20%3A%20${encodeURIComponent([
    phone,
  ])}%0APlan%20%3A%20${encodeURIComponent(
    plan
  )}%0AArea%20%3A%20${encodeURIComponent(
    area
  )}%0AAddress%20%3A%20${encodeURIComponent(
    address
  )}%0Aadd%20payment%20reciept%20%3A%20`;

  const sendOrder = async () => {
    const messagedata = JSON.stringify(userdata);

    let bodyContent = JSON.stringify({
      message: messagedata,
      subject: "new Order",
    });

    let response = await fetch("/api/send", {
      method: "POST",
      body: bodyContent,
    });
    if (response.ok === true) {
      setDone(true);
    }
    else {
        setPass(false);
        setIsClicked(false);
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col mx-4 max-w-[15rem] lg:py-5">
      <Order />
      <h1 className="font-bold">Scan QR to Pay</h1>
      <Image src="/qr.png" alt="qr" width={150} height={150} className="w-full max-w-[15rem]" />
      <p className="text-gray-500 text-sm italic">carrigito@okaxis</p>

      <div className=" text-center pt-4 w-full">
        <Link href={walink}>
          <button className="bg-green-500 p-2 rounded-md text-white w-full">
            Send reciept on whatsapp
          </button>
        </Link>
        <div className=" translate-y-1/2 my-1">
        <hr />
        <p className="-translate-y-1/2 text-xs text-gray-500 bg-white w-fit mx-auto px-1">OR</p>
        </div>
        {btnClicked ? (
          <button className="bg-gray-200 p-2 rounded-md w-full">
            {
              <img
                className="mx-auto rounded-full"
                width={25}
                src="/loading.gif"
                alt="loading..."
              />
            }
          </button>
        ) : (
          <button
            onClick={() => {
              sendOrder(), setIsClicked(true);
            }}
            className="bg-gray-200 p-2 rounded-md w-full"
          >
            Pay on Delivery
          </button>
        )}
      </div>
      {!pass && btnClicked && <p className="text-sm text-center text-red-700 pt-2">service error</p> }
    </div>
  );
}

const Order = () => {
  return (
    <div className=" text-center p-3 text-gray-600 bg-gray-100 rounded-md text-xs w-full my-5 md:mt-0 ">
      <div>
        <h1 className="text-base text-green-600">{userdata.plan}</h1>
        <p className=" break-all whitespace-normal">{userdata.address + "," + userdata.area}</p>
      </div>
    </div>
  );
};
