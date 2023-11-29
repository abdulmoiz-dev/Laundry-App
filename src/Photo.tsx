import React from "react";

const Photo = () => {
  return (
    <>
      <div className="bg-blue-50 h-screen">
        <div className="h-32"></div>
        <div className="grid grid-cols-3">
          <div></div>
          <div>
            <img
              className="rounded-br-lg rounded-tl-lg rounded-bl-lg rounded-tr-lg mb-20 h-80  "
              src="https://mobirise.com/extensions/refreshm5/laundry/assets/images/mbr.jpg"
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Photo;
