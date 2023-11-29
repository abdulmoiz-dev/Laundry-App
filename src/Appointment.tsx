import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="bg-violet-600 h-96 mt-16 grid grid-cols-3">
        <div></div>
        <div className="text-center ">
          <div className="bg-violet-600 h-20"></div>
          <p className="mt-1 text-lg font-bold text-white">
            Providing friendly, professional cleaning services for all our
            customers in the Greater Vancouver Area:
          </p>
          <button className="mt-16 bg-blue-500 w-60 h-16 rounded-full hover:bg-pink-300 transition duration-300 ease-in-out p-4">
            Book Appointment
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Appointment;
