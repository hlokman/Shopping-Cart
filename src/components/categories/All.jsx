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

function All({ items }) {
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
        <Backpack filteredItems={filteredMen} />
        <JacketMen filteredItems={filteredMen} />
        <TshirtMen filteredItems={filteredMen} />
        <JacketWomen1 filteredItems={filteredWomen} />
        <JacketWomen2 filteredItems={filteredWomen} />
        <TshirtWomen filteredItems={filteredWomen} />
        <Micropave filteredItems={filteredJewelry} />
        <Ring filteredItems={filteredJewelry} />
        <Ssd filteredItems={filteredElectronics} />
        <Monitor filteredItems={filteredElectronics} />
      </div>
    </>
  );
}

export default All;
