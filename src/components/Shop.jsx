import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import All from "./categories/All";
import Men from "./categories/Men";
import Women from "./categories/Women";
import Jewelry from "./categories/Jewelry";
import Electronics from "./categories/Electronics";
import ErrorCat from "./ErrorCat";

import Header from "./Header";
//width:100% for main and div

function Shop({ handleTest, items, handleAdd }) {
  const { subname } = useParams();

  return (
    <>
      <main className="flex min-h-[calc(100vh-71px)] w-[100%]">
        <aside className="font-primary flex flex-col gap-9 p-7 bg-[#f0f8ff] flex-shrink-0">
          <h1 className="text-3xl font-courierbold">Category</h1>
          <div className="flex flex-col gap-3">
            <Link to="/shop" className="italic font-courierbold">
              All
            </Link>
            <Link to="/shop/men">Men's Clothings</Link>
            <Link to="/shop/women">Women's Clothings</Link>
            <Link to="/shop/jewelry">Jewelry</Link>
            <Link to="/shop/electronics">Electronics</Link>
          </div>
        </aside>

        <div className="p-8 flex flex-col  items-center w-[100%]">
          {subname === "men" ? (
            <Men items={items} handleAdd={handleAdd} />
          ) : subname === "women" ? (
            <Women items={items} handleAdd={handleAdd} />
          ) : subname === "jewelry" ? (
            <Jewelry items={items} test={handleTest} handleAdd={handleAdd} />
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
//        <div>{subname === "catone" ? <CatOne /> : <p>Bof</p>}</div>
