import { useParams } from "react-router-dom";
import Micropave from "../cards/Micropave";
import Ring from "../cards/Ring";
import RingPage from "../itemsPages/RingPage";
import MicropavePage from "../itemsPages/MicropavePage";
import ErrorProduct from "../ErrorProduct";

function Jewelry({ items, test, handleAdd }) {
  const { product } = useParams();
  const filteredJewelry = items.filter((item) => item.category === "jewelery");

  return (
    <>
      {product === "1" ? (
        <MicropavePage
          filteredItems={filteredJewelry}
          testHere={test}
          handleAdd={handleAdd}
        />
      ) : product === "2" ? (
        <RingPage filteredItems={filteredJewelry} handleAdd={handleAdd} />
      ) : !product ? (
        <>
          <h1 className="flex w-[100%] justify-center">JEWELRY</h1>
          <div className="flex flex-wrap gap-10">
            <Micropave filteredItems={filteredJewelry} handleAdd={handleAdd} />
            <Ring filteredItems={filteredJewelry} handleAdd={handleAdd} />
          </div>
        </>
      ) : (
        <ErrorProduct />
      )}
    </>
  );
}

export default Jewelry;
