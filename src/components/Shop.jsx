import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import All from "./categories/All";
import Men from "./categories/Men";
import Women from "./categories/Women";
import Jewelry from "./categories/Jewelry";
import Electronics from "./categories/Electronics";
import ErrorCat from "./ErrorCat";

function Shop({ handleTest, items, handleAdd }) {
  const { subname } = useParams();

  return (
    <>
      <main className="flex flex-col min-h-[calc(100vh-101px)] w-[full] ">
        <nav className="font-primary flex justify-center items-center p-3 z-10 mobile:scale-[0.85] text-center">
          <div className="flex  gap-0 border-solid p-1 pr-5 pl-5 rounded-3xl items-center bg-gray-200">
            <Link
              to="/shop"
              className="italic font-courierbold border-r-2 border-r border-gray-400 px-2"
            >
              All
            </Link>
            <Link
              to="/shop/men"
              className=" border-r-2 border-r border-gray-400 px-2"
            >
              Men
            </Link>
            <Link
              to="/shop/women"
              className=" border-r-2 border-r border-gray-400 px-2"
            >
              Women
            </Link>
            <Link
              to="/shop/jewelry"
              className=" border-r-2 border-r border-gray-400 px-2"
            >
              Jewelry
            </Link>
            <Link
              to="/shop/electronics"
              className="border-r-2 border-r border-transparent px-2"
            >
              Electronics
            </Link>
          </div>
        </nav>

        <div className="p-8 flex flex-col mt-[-30px] items-center w-[100%]">
          {subname === "men" ? (
            <Men items={items} handleAdd={handleAdd} />
          ) : subname === "women" ? (
            <Women items={items} handleAdd={handleAdd} />
          ) : subname === "jewelry" ? (
            <Jewelry items={items} handleAdd={handleAdd} />
          ) : subname === "electronics" ? (
            <Electronics items={items} handleAdd={handleAdd} />
          ) : !subname ? (
            <All items={items} handleAdd={handleAdd} />
          ) : (
            <ErrorCat />
          )}
        </div>
      </main>
    </>
  );
}

export default Shop;
