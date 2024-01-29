import { useParams } from "react-router-dom";
import JacketWomen1 from "../cards/JacketWomen1";
import JacketWomen2 from "../cards/JacketWomen2";
import TshirtWomen from "../cards/TshirtWomen";
import JacketWomen1Page from "../itemsPages/JacketWomen1Page";
import JacketWomen2Page from "../itemsPages/JacketWomen2Page";
import TshirtWomenPage from "../itemsPages/TshirtWomenPage";
import ErrorProduct from "../ErrorProduct";

function Women({ items, handleAdd }) {
  const { product } = useParams();
  const filteredWomen = items.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <>
      {product === "1" ? (
        <JacketWomen1Page filteredItems={filteredWomen} handleAdd={handleAdd} />
      ) : product === "2" ? (
        <JacketWomen2Page filteredItems={filteredWomen} handleAdd={handleAdd} />
      ) : product === "3" ? (
        <TshirtWomenPage filteredItems={filteredWomen} handleAdd={handleAdd} />
      ) : !product ? (
        <>
          <h1 className="flex w-[100%] justify-center">WOMEN</h1>
          <div className="flex flex-wrap gap-10">
            <JacketWomen1 filteredItems={filteredWomen} handleAdd={handleAdd} />
            <JacketWomen2 filteredItems={filteredWomen} handleAdd={handleAdd} />
            <TshirtWomen filteredItems={filteredWomen} handleAdd={handleAdd} />
          </div>
        </>
      ) : (
        <ErrorProduct />
      )}
    </>
  );
}

export default Women;
