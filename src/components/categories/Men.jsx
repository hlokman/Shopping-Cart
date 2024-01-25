import Backpack from "../cards/Backpack.jsx";
import JacketMen from "../cards/JacketMen";
import TshirtMen from "../cards/TshirtMen";

function Men() {
  return (
    <>
      <h1 className="">MEN</h1>
      <div className="flex flex-wrap gap-10">
        <Backpack />
        <JacketMen />
        <TshirtMen />
      </div>
    </>
  );
}

export default Men;
