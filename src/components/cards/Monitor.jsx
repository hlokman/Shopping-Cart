import { Link } from "react-router-dom";
import { useState } from "react";

function Monitor({ filteredItems }) {
  const monitorItem = filteredItems.filter((item) => item.id === 14);

  return (
    <>
      <div className=" font-primary border-solid border-black border-2 h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3">
        <Link
          to="/shop/electronics/2"
          className=" flex justify-center items-center"
        >
          {" "}
          <img
            src={monitorItem[0].image}
            alt="monitor"
            className="w-[screen] h-[170px] "
          />
        </Link>
        <div>
          <p className="italic text-sm">{monitorItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto">
              {" "}
              {monitorItem[0].price}${" "}
            </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {monitorItem[0].rating.rate} ({monitorItem[0].rating.count})
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

export default Monitor;
