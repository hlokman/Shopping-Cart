import { Link } from "react-router-dom";
import { useState } from "react";

function JacketWomen1({
  name = "JacketWomen1",
  price,
  handleDown,
  handleUp,
  quantity /* itemsObj*/,
}) {
  return (
    <>
      <div className="border-solid border-black border-2 h-[350px] w-[260px] grid grid-rows-[3fr_1fr] p-2">
        <Link to="/">Link</Link>
        <div>
          <p>{name}</p>
          <p> {price}$ </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default JacketWomen1;
