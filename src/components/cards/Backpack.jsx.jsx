import { Link } from "react-router-dom";
import { useState } from "react";

function Backpack({ filteredItems, handleAdd }) {
  /*if (!filteredItems) {
    return <div>Loading...</div>;
  }*/
  const backpackItem = filteredItems.filter((item) => item.id === 1);
  console.log("backpack: ", backpackItem[0]);

  return (
    <>
      <div className=" font-primary border-solid border-gray-300 border-[1px] h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3 transition ease-in-out duration-300 hover:scale-102 hover:-translate-y-1 hover:shadow-[0px_5px_5px_#e7e7e7]">
        <Link to="/shop/men/1" className="flex justify-center items-center">
          <img
            src={backpackItem[0].image}
            alt="backpak"
            className="w-[screen] h-[270px] "
          />
        </Link>
        <div>
          <p className="italic text-sm">{backpackItem[0].title}</p>
          <div className="flex">
            <p className="font-courierbold mr-auto">
              {" "}
              {backpackItem[0].price}${" "}
            </p>
            <div className="">
              <span className="font-courierbold ">Rating:</span>{" "}
              {backpackItem[0].rating.rate} ({backpackItem[0].rating.count})
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button
              onClick={(e) => handleAdd(e, backpackItem[0])}
              className="font-courierbold text-[#1a2836] border-solid border-black border-[1px] rounded-2xl pl-2 pr-2 transition ease-in-out duration-300 hover:bg-black hover:text-white"
            >
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Backpack;

/*
      <div className="border-solid border-black border-2 h-[350px] w-[260px] rounded-2xl grid grid-rows-[3fr_1fr] p-2">
        <Link to="/shop/men/1">Link</Link>
        <div>
          <p>{backpackItem[0].title}</p>
          <p> {backpackItem[0].price}$ </p>
          <div className="flex"><button className="mr-auto">Add to Cart</button> <div>Rating: {backpackItem[0].rating.rate} ({backpackItem[0].rating.count})</div></div>
        </div>
      </div>
*/
