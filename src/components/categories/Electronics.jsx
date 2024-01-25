import Ssd from "../cards/Ssd";
import Monitor from "../cards/Monitor";

function Electronics() {
  return (
    <>
      <h1 className="flex w-[100%] justify-center">ELECTRONICS</h1>
      <div className="flex flex-wrap gap-10">
        <Ssd />
        <Monitor />
      </div>
    </>
  );
}

export default Electronics;
