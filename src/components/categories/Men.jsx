import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Backpack from "../cards/Backpack.jsx";
import JacketMen from "../cards/JacketMen";
import TshirtMen from "../cards/TshirtMen";
import BackpackPage from "../itemsPages/BackpackPage.jsx";
import JacketMenPage from "../itemsPages/JacketMenPage.jsx";
import TshirtMenPage from "../itemsPages/TshirtMenPage.jsx";
import ErrorProduct from "../ErrorProduct.jsx";

function Men({ items, handleSub }) {
  const { product } = useParams();
  const filteredMen = items.filter(
    (item) => item.category === "men's clothing"
  );

  console.log("men's clothings: ", filteredMen);

  return (
    <>
      {product === "1" ? (
        <BackpackPage filteredItems={filteredMen} handleSub={handleSub} />
      ) : product === "2" ? (
        <JacketMenPage filteredItems={filteredMen} />
      ) : product === "3" ? (
        <TshirtMenPage filteredItems={filteredMen} />
      ) : !product ? (
        <>
          <h1 className="">MEN</h1>
          <div className="flex flex-wrap gap-10">
            <Backpack filteredItems={filteredMen} />
            <JacketMen filteredItems={filteredMen} />
            <TshirtMen filteredItems={filteredMen} />
          </div>
        </>
      ) : (
        <ErrorProduct />
      )}
    </>
  );
}

export default Men;
