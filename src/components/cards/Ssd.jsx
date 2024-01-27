import { Link } from "react-router-dom";
import { useState } from "react";

function Ssd({ filteredItems }) {
  const ssdItem = filteredItems.filter((item) => item.id === 10);

  return (
    <>
      <div className=" font-primary border-solid border-black border-2 h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3">
        <Link
          to="/shop/electronics/1"
          className=" flex justify-center items-center"
        >
          {" "}
          <img
            src={ssdItem[0].image}
            alt="ssd"
            className="w-[screen] h-[190px] "
          />
        </Link>
        <div>
          <p className="italic text-sm">{ssdItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto"> {ssdItem[0].price}$ </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {ssdItem[0].rating.rate} ({ssdItem[0].rating.count})
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="font-courierbold text-[#1a2836] border-solid border-black border-2 rounded-2xl pl-2 pr-2 mt-[9px]">
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ssd;
