import Image from "next/image";

export default function Done() {
    return (
  <div className="flex  flex-col justify-center items-center p-10">
      <Image
        width={100}
        height={100}
        alt="done..."
        src="/done.gif"
      />
      <h1 className=" font-bold text-black">Order Placed</h1>
  </div>
    );
  }