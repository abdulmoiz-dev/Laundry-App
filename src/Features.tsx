import React from "react";

const Features = () => {
  return (
    <>
      <section className="bg-color-white ">
        <div className="container mx-auto mt-16">
          <div className="flex items-center justify-center">
            <h1 className="flex items-center text-6xl text-violet-600">
              Features
            </h1>
          </div>
          <div className="grid grid-cols-3 mt-16">
            <div className="grid grid-cols-2 bg-violet-600 rounded-tl-lg rounded-tr-lg w-80">
              <div className="  ">
                <p className="text-4xl text-white ml-4 mb-3">Eco Friendly</p>
              </div>
              <div className="">
                <ul>
                  <li>Hello</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-violet-600 rounded-tl-lg rounded-tr-lg w-80">
              <div className="">
                <p className="text-4xl text-white ml-4 mt-2">Like</p>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-violet-600 rounded-tl-lg rounded-tr-lg w-80">
              <div className="">
                <p className="text-4xl text-white ml-4 mt-2">Fully</p>
              </div>
            </div>
            <div className="bg-blue-50 w-80 rounded-bl-lg rounded-br-lg">
              <p className="mt-8 mb-8 ml-4 mr-4 text-lg">
                We use environmentally friendly products whenever possible to
                keep your family safe.
              </p>
            </div>
            <div className="bg-blue-50 w-80 rounded-bl-lg rounded-br-lg">
              <p className="mt-8 mb-8 ml-4 mr-4 text-lg">
                Our customers love how great their homes look and feel after
                each clean.
              </p>
            </div>
            <div className="bg-blue-50 w-80 rounded-bl-lg rounded-br-lg">
              <p className="mt-8 mb-8 ml-4 mr-4 text-lg">
                We're a fully insured, locally registered BC business serving
                the Vancouver area.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-16 ">
            <div className="">
              <p className="text-2xl text-violet-600 ml-48 mr-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit:
              </p>
            </div>
            <div className="mt-5">
              <p className="ml-16 mr-44 font-bold text-blue-900 text-lg">
                We help you keep your space clean and safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
