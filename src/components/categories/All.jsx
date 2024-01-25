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

function All() {
  return (
    <>
      <h1 className="">ALL CARDS</h1>
      <div className="flex flex-wrap gap-10">
        <Backpack />
        <JacketMen />
        <TshirtMen />
        <JacketWomen1 />
        <JacketWomen2 />
        <TshirtWomen />
        <Micropave />
        <Ring />
        <Ssd />
        <Monitor />
      </div>
    </>
  );
}

export default All;
