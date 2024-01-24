import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import All from "./categories/All";
import CatJackets from "./categories/CatOne";
import CatSuits from "./categories/CatSuits";
import CatGlasses from "./categories/CatGlasses";
import CatShoes from "./categories/CatShoes";
import ErrorCat from "./ErrorCat";

import Header from "./Header";

function Shop({ handleTest }) {
  const { subname } = useParams();

  return (
    <>
      <main className="flex min-h-[calc(100vh-71px)]">
        <aside className="font-primary flex flex-col gap-9 p-7 bg-[#f0f8ff]">
          <h1 className="text-3xl font-courierbold">Category</h1>
          <div className="flex flex-col gap-3">
            <Link to="/shop" className="italic font-courierbold">
              All
            </Link>
            <Link to="/shop/jackets">Jackets</Link>
            <Link to="/shop/suits">Suits</Link>
            <Link to="/shop/glasses">Glasses</Link>
            <Link to="/shop/shoes">Shoes</Link>
          </div>
        </aside>

        <div>
          {subname === "jackets" ? (
            <CatJackets test={handleTest} />
          ) : subname === "suits" ? (
            <CatSuits />
          ) : subname === "glasses" ? (
            <CatGlasses />
          ) : subname === "shoes" ? (
            <CatShoes />
          ) : !subname ? (
            <All />
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
