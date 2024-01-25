import Micropave from "../cards/Micropave";
import Ring from "../cards/Ring";

function Jewelry({ test }) {
  return (
    <>
      <h1 className="flex w-[100%] justify-center">JEWELRY</h1>
      <div className="flex flex-wrap gap-10">
        <Micropave />
        <Ring />
      </div>
    </>
  );
}

export default Jewelry;
