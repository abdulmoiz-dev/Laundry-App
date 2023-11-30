import React from "react";

const BigDiv = () => {
  const redirectToGoogle = () => {
    window.open("https://www.google.com", "lol");
  };
  return (
    <>
      <section className="bg-violet-600 h-auto">
        <div className="container mx-auto bg-violet-600  ">
          <div className="bg-violet-600 h-20"></div>
          <div className="grid grid-cols-2 bg-white rounded-br-lg rounded-tl-lg rounded-bl-lg rounded-tr-lg ">
            <img
              className="w-80 h-200 ml-24 mt-20 mb-20 rounded-br-lg rounded-tl-lg rounded-bl-lg rounded-tr-lg"
              src="https://mobirise.com/extensions/refreshm5/laundry/assets/images/image5.jpg"
            />
            <div className="mt-24 ">
              <p className="text-8xl text-blue-500">Laundry</p>
              <p className="mt-10 mr-28 text-pink-500 text-2xl">
                A Revolution is a compact, self-service, automatic laundry
                equipment module also called launderette or laundromat
              </p>
              <button
                onClick={redirectToGoogle}
                className="bg-violet-600 text-white font-bold text-lg mt-20 ml-32 h-10 w-48 hover:bg-violet-800 rounded-full transition duration-300 ease-in-out -4"
              >
                Get Started
              </button>
              <br />
              <button className="bg-pink-400 text-lg ml-32 mb-24 text-white font-bold mt-4 w-48 h-10 hover:bg-pink-700 rounded-full transition duration-300 ease-in-out ">
                Cleaning tips
              </button>
            </div>
            <div></div>
          </div>

          <div className="bg-violet-600 h-20"></div>
        </div>
      </section>
    </>
  );
};

export default BigDiv;
