import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="flex-wrap lg:flex items-center justify-between mb-4 lg:mb-8">
      <div className="flex items-center justify-end mb-6 lg:mb-0">
        <Image src="/Logo-light.png" alt="Image" width={200} height={200} />

        <button
          className="flex items-center justify-center border border-green-500 w-10 h-10 text-green-500 rounded-md outline-none lg:hidden ml-auto"
          onClick={navToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <ul
        className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 ${
          navbarOpen ? "flex" : "hidden"
        }`}
      >
        <li className=" mb-5 lg:mb-0">
          <a href="#Plans" className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300">Plans</a>
        </li>

        <li className="mb-5 lg:mb-0">
          <a href="#Footer" className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300">Service</a>
        </li>

        <li className="mb-5 lg:mb-0">
          <a href="https://wa.me/+918989599699?text=Hi%20CarryGITO" className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300">Contact</a>
        </li>

        <li className="flex" >
          <a href="/order" className=" w-full py-3 px-8 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300">Get Trial</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
