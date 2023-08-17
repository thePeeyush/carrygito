import Image from "next/image";
import Link from "next/link";

let userdata;
export const getData = async(data) => {
  userdata = await data;
};


export default function Payment({setDone}) { 
    const {phone , fullname, area ,address,plan}= userdata;
    const walink = `https://wa.me/+918989599699?text=Fullname%20%3A%20${encodeURIComponent(fullname)}%0APhone%20%3A%20${encodeURIComponent([phone])}%0APlan%20%3A%20${encodeURIComponent(plan)}%0AArea%20%3A%20${encodeURIComponent(area)}%0AAddress%20%3A%20${encodeURIComponent(address)}%0Aadd%20payment%20reciept%20%3A%20`

    const sendOrder = async() =>{

        const messagedata =  JSON.stringify(userdata);

        let bodyContent = JSON.stringify({
            "message": messagedata,
            "subject": "new Order"
          });
          
          let response = await fetch("http://localhost:3000/api/send", { 
            method: "POST",
            body: bodyContent,
          });
          if (response.ok === true) {
            setDone(true);
          }
    }

    return(
        <div className=" flex justify-center items-center flex-col">
        <Order/>
        <h1>Scan QR to Pay</h1>
            <Image
                src="/qr.png"
                alt="qr"
                width={150}
                height={150}
                className=""
            />
            <p className="text-gray-500 text-sm italic">carrigito@okaxis</p>

            <div className=" text-center"> 

            <Link href={walink}>
            <button className="bg-green-500 p-2 m-2 rounded-md text-white">Send reciept on whatsapp</button></Link>
                <hr />
                or
            <button onClick={sendOrder}  className="bg-gray-200 p-2 m-2 rounded-md">Pay on Delivery</button>
            </div>

        </div>
    )
}

const Order = () => { 

    return(
        <div className=" text-center p-3 text-gray-600 bg-gray-100 rounded-md text-xs mb-5 max-w-sm mt-10 md:mt-0 ">
            <div>
                <h1 className="text-base text-green-600">{userdata.plan}</h1>
                <p>{userdata.address + ","+ userdata.area}</p>
            </div>
        </div>
    )
 }