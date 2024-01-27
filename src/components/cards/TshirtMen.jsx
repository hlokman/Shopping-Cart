import { Link } from "react-router-dom";
import { useState } from "react";

function TshirtMen({ filteredItems }) {
  /*if (!filteredItems) {
    return <div>Loading...</div>;
  }*/
  const tshirtItem = filteredItems.filter((item) => item.id === 2);
  console.log("tshirtMen: ", tshirtItem);

  return (
    <>
      <div className=" font-primary border-solid border-black border-2 h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3">
        <Link to="/shop/men/3" className="flex justify-center items-center">
          {" "}
          <img
            src={tshirtItem[0].image}
            alt="t-shirt"
            className="w-[screen] h-[270px] "
          />
        </Link>
        <div>
          <p className="italic text-sm">{tshirtItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto"> {tshirtItem[0].price}$ </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {tshirtItem[0].rating.rate} ({tshirtItem[0].rating.count})
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

export default TshirtMen;

/*
      <div className=" font-primary border-solid border-black border-2 h-[350px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3">
        <Link to="/shop/men/3">Link</Link>
        <div>
          <p className="italic text-sm">{tshirtItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto"> {tshirtItem[0].price}$ </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {tshirtItem[0].rating.rate} ({tshirtItem[0].rating.count})
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="font-courierbold text-[#1a2836] border-solid border-black border-2 rounded-2xl pl-2 pr-2 mt-[9px]">
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
*/
