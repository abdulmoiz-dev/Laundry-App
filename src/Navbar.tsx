import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="grid-cols-9  flex-auto grid bg-blue-50  w-auto h-28">
        <a
          className="transition duration-300 ease-in-out  active flex-none w-14 h-1 ml-40 mt-12 hover:text-red-500 font-bold text-blue-900"
          href="#"
        >
          Main
        </a>
        <a
          className="flex-none w-14 h-1 mt-12 ml-28 font-bold transition duration-300 ease-in-out  hover:text-red-500 text-blue-900"
          href="# "
        >
          Features
        </a>
        <a
          href="#"
          className="h-1 mt-12 ml-24 hover:text-red-500 text-blue-900 font-bold transition duration-300 ease-in-out "
        >
          Reviews
        </a>
        <img
          className="mt-6 ml-20"
          src="https://mobirise.com/extensions/refreshm5/laundry/assets/images/logo.png"
        />
        <a
          href="#"
          className="text-color-blue h-1 mt-12 ml-1 hover:text-red-500 font-bold text-blue-950 transition duration-300 ease-in-out  "
        >
          RefreshM5
        </a>
        <a
          href="#"
          className="hover:text-red-500 h-1 mt-12  text-blue-900 font-bold transition duration-300 ease-in-out "
        >
          About Us
        </a>
        <a
          href="#"
          className="h-1 mt-12 hover:text-red-500 text-blue-900 font-bold transition duration-300 ease-in-out "
        >
          Pricing
        </a>
        <a
          href="#"
          className="h-1 mt-12 mr-24 hover:text-red-500 text-blue-900 font-bold transition duration-300 ease-in-out "
        >
          Contacts
        </a>
      </div>
    </>
  );
};

export default Navbar;
