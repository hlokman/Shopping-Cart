import { useParams } from "react-router-dom";
import Backpack from "../cards/Backpack.jsx";
import JacketMen from "../cards/JacketMen";
import TshirtMen from "../cards/TshirtMen";
import BackpackPage from "../itemsPages/BackpackPage.jsx";
import JacketMenPage from "../itemsPages/JacketMenPage.jsx";
import TshirtMenPage from "../itemsPages/TshirtMenPage.jsx";
import ErrorProduct from "../ErrorProduct.jsx";

function Men({ items, handleAdd }) {
  const { product } = useParams();
  const filteredMen = items.filter(
    (item) => item.category === "men's clothing"
  );

  return (
    <>
      {product === "1" ? (
        <BackpackPage filteredItems={filteredMen} handleAdd={handleAdd} />
      ) : product === "2" ? (
        <JacketMenPage filteredItems={filteredMen} handleAdd={handleAdd} />
      ) : product === "3" ? (
        <TshirtMenPage filteredItems={filteredMen} handleAdd={handleAdd} />
      ) : !product ? (
        <>
          <h1 className="font-courierbold mb-3">MEN'S CLOTHINGS</h1>
          <div className="flex flex-wrap gap-10 justify-center">
            <Backpack filteredItems={filteredMen} handleAdd={handleAdd} />
            <JacketMen filteredItems={filteredMen} handleAdd={handleAdd} />
            <TshirtMen filteredItems={filteredMen} handleAdd={handleAdd} />
          </div>
        </>
      ) : (
        <ErrorProduct />
      )}
    </>
  );
}

export default Men;
