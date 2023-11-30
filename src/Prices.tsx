import React from "react";

const Prices = () => {
  return (
    <>
      <section className="bg-violet-700 h-max">
        <section className="container mx-auto ">
          <div className="grid grid-cols-3">
            <div></div>
            <div className="text-6xl h-20 text-white font-semibold text-center mt-16">
              Our Pricing
            </div>
            <div></div>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-tl-lg rounded-tr-lg w-64 text-center h-full rounded-bl-lg rounded-br-lg">
                <div className="h-12"></div>
                <div className="h-20 ml-4 mr-4 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-6"></div>
                  <p>Basic</p>
                </div>
                <div className="mt-10 text-left ml-4">
                  <p className="text-blue-800">Bathroom</p>
                  <li className="mt-4">Clean & polish sinks</li>
                  <p className="text-blue-800 mt-8">Kitchen </p>
                  <li className="mt-4">Disinfect & clean sinks</li>
                  <li className="mt-4">Clean appliance surfaces</li>
                  <p className="text-blue-800 mt-8">All living areas</p>
                  <li className="mt-4">Sanitize light switches</li>
                  <li className="mt-4">Wipe surfaces within reach</li>
                  <li className="mt-4">Clean floors</li>
                </div>
                <div className="h-12 ml-4 mr-4 mt-10 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-2 "></div>
                  <p>$150</p>
                </div>
                <div className="mt-8">
                  <button className="bg-violet-600 text-white font-bold text-lg mt-6  h-10 w-36 mb-10 hover:bg-violet-800 rounded-full transition duration-300 ease-in-out -4">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-lg w-64 text-center h-full ">
                <div className="h-12"></div>
                <div className="h-20 ml-4 mr-4 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-6"></div>
                  <p>Standard</p>
                </div>
                <div className="mt-10 text-left ml-4">
                  <p className="text-blue-800">Bathroom</p>
                  <li className="mt-4">Clean & polish all fixtures</li>
                  <p className="text-blue-800 mt-8">Kitchen </p>
                  <li className="mt-4">Clean counters & backsplash</li>
                  <li className="mt-4">Wipe interior of microwave</li>
                  <p className="text-blue-800 mt-8">All living areas</p>
                  <li className="mt-4">Clean exterior of kitchen cabinets</li>
                  <li className="mt-4">Clean floors</li>
                  <li className="mt-4">Wipe mirrors</li>
                </div>
                <div className="h-12 ml-4 mr-4 mt-10 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-2 "></div>
                  <p>$250</p>
                </div>
                <div className="mt-8">
                  <button className="bg-violet-600 text-white font-bold text-lg mt-6  h-10 w-36 mb-10 hover:bg-violet-800 rounded-full transition duration-300 ease-in-out -4">
                    Book Now
                  </button>
                </div>
                <div className="mt-20 "></div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-tl-lg rounded-tr-lg w-64 rounded-bl-lg rounded-br-lg text-center h-full ">
                <div className="h-12"></div>
                <div className="h-20 ml-4 mr-4 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-6"></div>
                  <p>Move-Out</p>
                </div>
                <div className="mt-10 text-left ml-4">
                  <p className="text-blue-800">Bathroom</p>
                  <li className="mt-4">Disinfect & clean showers/bathtubs</li>
                  <p className="text-blue-800 mt-8">Kitchen </p>
                  <li className="mt-4">Clean counters & backsplash</li>
                  <li className="mt-4">Clean interior of fridge</li>
                  <p className="text-blue-800 mt-8">All living areas</p>
                  <li className="mt-4">Clean blinds</li>
                  <li className="mt-4">Clean interior of windows</li>
                  <li className="mt-4">Wipe walls</li>
                </div>
                <div className="h-12 ml-4 mr-4 mt-10 text-center bg-blue-200 text-2xl text-blue-800">
                  <div className="h-2 "></div>
                  <p>$350</p>
                </div>
                <div className="mt-8">
                  <button className="bg-violet-600 text-white font-bold text-lg mt-6  h-10 w-36 mb-10 hover:bg-violet-800 rounded-full transition duration-300 ease-in-out -4">
                    Book Now
                  </button>
                </div>
                <div className="mt-8 "></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Prices;
