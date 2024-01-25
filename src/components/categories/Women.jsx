import JacketWomen1 from "../cards/JacketWomen1";
import JacketWomen2 from "../cards/JacketWomen2";
import TshirtWomen from "../cards/TshirtWomen";

function Women() {
  return (
    <>
      <h1 className="flex w-[100%] justify-center">WOMEN</h1>
      <div className="flex flex-wrap gap-10">
        <JacketWomen1 />
        <JacketWomen2 />
        <TshirtWomen />
      </div>
    </>
  );
}

export default Women;
