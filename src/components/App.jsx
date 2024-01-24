import "../style/App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import { Outlet } from "react-router-dom";

function App() {
  const { name } = useParams();
  const [items, setItems] = useState(0);

  const handleClick = () => {
    setItems(items + 1);
  };

  return (
    <>
      <header className="flex justify-around items-center bg-gray-200 p-4">
        <h1 className="text-2xl font-courierbold ">Great Shop</h1>
        <nav className="flex gap-10 font-primary text-lg">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/shop" className="">
            Shop
          </Link>
          <Link to="/" className="">
            About
          </Link>
        </nav>
        <div>
          <button className="bg-cart-logo bg-cover h-8 w-8 border-none pointer-events-auto"></button>
          <span>{items}</span>
        </div>
      </header>

      {name === "shop" ? (
        <Shop handleTest={handleClick} />
      ) : !name ? (
        <Home />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;
