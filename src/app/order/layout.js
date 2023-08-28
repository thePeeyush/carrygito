import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Order Tiffin Online in Indore | Carrygito Tiffin Services",
  description: "Ready to enjoy delicious and convenient meals? Order tiffin online from Carrygito in Indore!",
};

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className=" md:bg-green-400 min-h-[90vh] lg:min-h-screen md:p-10 flex md:items-center justify-center">
          <div className=" flex flex-col lg:flex-row lg:justify-evenly items-center relative bg-white md:shadow-xl md:rounded-xl py-4 md:px-10 h-fit w-full md:w-fit">
            <Link href="/" className=" absolute top-5 left-5">
              <svg className="back-icon" width={20} fill="gray" viewBox="0 0 24 24">
                <path d="M20.293 11H5.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L5.414 13h14.879a1 1 0 0 0 0-2z" />
              </svg>
            </Link>
            <div className="flex flex-col justify-start items-center">
              <Image
                src="/Logo-light.png"
                alt="Image"
                width={500}
                height={500}
                className=" w-24 lg:w-64"
                priority="false"
              />
              <h1 className=" text-xl text-center text-gray-600 font-semibold">
                Tiffin Service
              </h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
