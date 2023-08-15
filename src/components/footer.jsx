import Image from "next/image";
import React from "react";
import footlinks from "../data/footlinks.json";

function Footer() {
  return (
    <footer id="Footer" className="bg-green-950 py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
          <div className="mb-10 lg:mb-0">
            <Image
              src="/Logo-dark.png"
              alt="Image"
              width={200}
              height={200}
              className="mb-5 mx-auto lg:mx-0"
            />

            <p className="font-normal text-gray-400 text-md max-w-xs mx-auto">
              Our expert chefs prepare fresh and flavorful dishes every day,
              ensuring a balanced and wholesome meal experience.
            </p>
          </div>
          <>
            {Object.entries(footlinks.links).map(([title, items]) => {
              return <FootCard head={title} links={items} key={title} />;
            })}
          </>

          <div className="space-y-4 mb-10 lg:mb-0 max-w-[250px] mx-auto lg:mx-0">
            <h4 className="font-semibold text-green-500 text-lg mb-6">
              Location
            </h4>
            <p className=" font-normal text-gray-400 text-md hover:text-gray-50 transition ease-in-out duration-300 ">
              Ambikapuri, Indore, Madhya Pradesh, India, Ring Road, Indore,
              Madhya Pradesh - 451010
            </p>
            <p className=" font-normal text-gray-400 text-md hover:text-gray-50 transition ease-in-out duration-300 ">
              <a href="tel:+918989599699">+91 89895 99699</a>
            </p>
            <p className=" font-normal text-gray-400 text-md hover:text-gray-50 transition ease-in-out duration-300 ">
              <a href="mailto:peeyushdehariya951@gmail.com">info@gamil.com</a>
            </p>
          </div>
        </div>

        <hr className="text-gray-300 mt-10" />

        <p className="font-normal text-gray-400 text-md text-center mt-5">
          © 2023 CarryGito. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FootCard({ head, links }) {
  return (
    <div className="space-y-4 mb-10 lg:mb-0 max-w-[250px] mx-auto lg:mx-0">
      <h4 className="font-semibold text-green-500 text-lg mb-6">{head}</h4>
      {links.map((link, index) => {
        return (
          <p
            key={index}
            className=" font-normal text-gray-400 text-md hover:text-gray-50 transition ease-in-out duration-300 "
          >
            {link}
          </p>
        );
      })}
    </div>
  );
}

export default Footer;
