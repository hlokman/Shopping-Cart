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
  const [itemsCart, setItemsCart] = useState(0);
  const [items, setItems] = useState([]);
  const selectedItemsId = [1, 2, 3, 6, 7, 10, 14, 15, 16, 20]; //selected items from the fakestore API
  const [cart, setCart] = useState([
    { productId: 111, product: "shirt", price: 20, quantity: 1 },
  ]);
  //let check = [];

  const handleClick = () => {
    setItemsCart(itemsCart + 1);
  };

  const handleSub = (e, product) => {
    e.preventDefault();
    console.log("submit: ", e.currentTarget.quantity.value);

    //
    let exist = cart.some((item) => item.productId === product.id);

    if (!exist) {
      setCart([
        ...cart,
        {
          productId: product.id,
          price: product.price,
          quantity: 1,
        },
      ]);
    } else {
      setCart((prevState) =>
        prevState.map((item) =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1 /*e.currentTarget.quantity.value*/,
              }
            : item
        )
      );
    }

    setItemsCart(itemsCart + 1);
    e.target.reset();
  };

  const fetchItem = async (product) => {
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products/${product}`,
        {
          mode: "cors",
        }
      );
      if (!response.ok) {
        throw new Error(
          `This is a HTTP error: The status is ${response.status}`
        );
      }
      let json = await response.json();
      return json; //!
    } catch (error) {
      console.log("errorHere");
      alert(error.message);
    }
  };

  const fetchAllItems = async () => {
    const fetchPromises = selectedItemsId.map((item) => fetchItem(item));
    const allResponses = await Promise.all(fetchPromises);
    setItems(allResponses); //! in order to avoid duplication when fetching
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  console.log(items);
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
          <span>
            {itemsCart} + {cart.length}
          </span>
        </div>
      </header>

      {name === "shop" ? (
        <Shop handleTest={handleClick} items={items} handleSub={handleSub} />
      ) : !name ? (
        <Home />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;
