import { Link } from "react-router-dom";
import { useState } from "react";

function Micropave({ filteredItems }) {
  const micropaveItem = filteredItems.filter((item) => item.id === 6);

  return (
    <>
      <div className=" font-primary border-solid border-gray-300 border-[1px] h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3 transition ease-in-out duration-300 hover:scale-102 hover:-translate-y-6 hover:shadow-[0px_5px_5px_#e7e7e7]">
        <Link to="/shop/jewelry/1" className="flex justify-center items-center">
          {" "}
          <img
            src={micropaveItem[0].image}
            alt="t-shirt"
            className="w-[screen] h-[290px] "
          />
        </Link>
        <div>
          <p className="italic text-sm">{micropaveItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto">
              {" "}
              {micropaveItem[0].price}${" "}
            </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {micropaveItem[0].rating.rate} ({micropaveItem[0].rating.count})
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="font-courierbold text-[#1a2836] border-solid border-black border-[1px] rounded-2xl pl-2 pr-2 mt-[9px] transition ease-in-out duration-300 hover:bg-black hover:text-white">
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Micropave;
