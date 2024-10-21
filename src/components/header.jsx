import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
      <header className="flex-col lg:flex-row flex items-center justify-between mb-10 max-w-screen-lg mx-auto">
        <div className="mx-auto text-center lg:text-left xl:mx-0 mb-4 xl:mb-0">
          <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-loose mb-10"> Healthy <br /> <span className="text-green-600">Delicious</span> <br />  Nutritious.</h1>
  
          <p className="font-normal text-gray-500 max-w-xs md:max-w-lg text-sm md:text-lg mb-10">Meals delivered right to your doorstep with our Tiffin Service every single day</p>
  
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/order" className="px-8 py-3 bg-green-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300">Start Now</Link>
          </div>
        </div>
  
        <div className="mx-auto xl:mx-0 hero">
        <Image src="/hero.png" alt="Image" width={450} height={450} priority="false"/>
          
        </div>
      </header>
    );
  }

  export default Header;