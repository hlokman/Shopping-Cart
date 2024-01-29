import { Link } from "react-router-dom";
import Backpack from "../cards/Backpack.jsx";
import JacketMen from "../cards/JacketMen.jsx";
import TshirtMen from "../cards/TshirtMen.jsx";
import JacketWomen1 from "../cards/JacketWomen1.jsx";
import JacketWomen2 from "../cards/JacketWomen2.jsx";
import TshirtWomen from "../cards/TshirtWomen.jsx";
import Micropave from "../cards/Micropave.jsx";
import Ring from "../cards/Ring.jsx";
import Ssd from "../cards/Ssd.jsx";
import Monitor from "../cards/Monitor.jsx";

function All({ items, handleAdd }) {
  const filteredMen = items.filter(
    (item) => item.category === "men's clothing"
  );
  const filteredWomen = items.filter(
    (item) => item.category === "women's clothing"
  );
  const filteredJewelry = items.filter((item) => item.category === "jewelery");
  const filteredElectronics = items.filter(
    (item) => item.category === "electronics"
  );

  return (
    <>
      {}
      <h1 className="">ALL CARDS</h1>
      <div className="flex flex-wrap gap-10">
        <Backpack filteredItems={filteredMen} handleAdd={handleAdd} />
        <JacketMen filteredItems={filteredMen} handleAdd={handleAdd} />
        <TshirtMen filteredItems={filteredMen} handleAdd={handleAdd} />
        <JacketWomen1 filteredItems={filteredWomen} handleAdd={handleAdd} />
        <JacketWomen2 filteredItems={filteredWomen} handleAdd={handleAdd} />
        <TshirtWomen filteredItems={filteredWomen} handleAdd={handleAdd} />
        <Micropave filteredItems={filteredJewelry} handleAdd={handleAdd} />
        <Ring filteredItems={filteredJewelry} handleAdd={handleAdd} />
        <Ssd filteredItems={filteredElectronics} handleAdd={handleAdd} />
        <Monitor filteredItems={filteredElectronics} handleAdd={handleAdd} />
      </div>
    </>
  );
}

export default All;
