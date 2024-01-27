import { Link } from "react-router-dom";
import { useState } from "react";

function Backpack({ filteredItems }) {
  /*if (!filteredItems) {
    return <div>Loading...</div>;
  }*/
  const backpackItem = filteredItems.filter((item) => item.id === 1);
  console.log("backpack: ", backpackItem[0]);

  return (
    <>
      <div className=" font-primary border-solid border-black border-2 h-[400px] w-[280px] rounded-2xl grid grid-rows-[3fr_1fr] p-3">
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
            <button className="font-courierbold text-[#1a2836] border-solid border-black border-2 rounded-2xl pl-2 pr-2">
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
