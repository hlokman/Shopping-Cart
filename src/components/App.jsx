import "../style/App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import Checkout from "./Checkout";
import { Outlet } from "react-router-dom";

function App() {
  const { name } = useParams();
  const [itemsCart, setItemsCart] = useState(0);
  const [items, setItems] = useState([]);
  const selectedItemsId = [1, 2, 3, 6, 7, 10, 14, 15, 16, 20]; //selected items from the fakestore API
  const [cart, setCart] = useState([]); // useState([{ productId: 111, name: "shirt", price: 20, quantity: 1 }]);

  const [popCart, setPopCard] = useState("hidden");
  const [hidden, setHidden] = useState(true);
  //
  const handleCartClick = () => {
    if (hidden) {
      setPopCard("inline-block");
      setHidden(false);
    } else {
      setPopCard("hidden");
      setHidden(true);
    }
  };

  const handleCartQuit = () => {
    setPopCard("hidden");
    setHidden(true);
  };

  const handleAdd = (e, product) => {
    e.preventDefault();
    //console.log("submit: ", e.currentTarget.quantity.value);
    //
    let exist = cart.some((item) => item.productId === product.id);
    let quantityAdded =
      e.target.tagName === "FORM" ? Number(e.currentTarget.quantity.value) : 1; //for the cases where the user is in the item's own page or the categories

    if (!exist) {
      setCart([
        ...cart,
        {
          productId: product.id,
          price: product.price,
          name: product.title,
          quantity: quantityAdded,
          image: product.image,
        },
      ]);
    } else {
      setCart((prevState) =>
        prevState.map((item) =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + quantityAdded,
              }
            : item
        )
      );
    }

    console.log(e.target.tagName);
    setItemsCart(itemsCart + 1);
    if (e.target.tagName === "FORM") e.target.reset(); //for the cases where the user is in the item's own page or the categories
  };

  const handleDelete = (productId) => {
    setCart((prevState) =>
      prevState.filter((item) => item.productId !== productId)
    );
  };

  //FETCH
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
  console.log("CART:  ", cart);
  return (
    <>
      <header className="flex justify-around items-center bg-gray-200 p-4 relative">
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
          <button
            onClick={handleCartClick}
            className="bg-cart-logo bg-cover h-8 w-8 border-none pointer-events-auto"
          ></button>
          <span>
            {itemsCart} + {cart.length}
          </span>
        </div>
        {/*Cart ----> */}
        <section
          className={`absolute flex flex-col gap-3 w-[435px] min-h-[100px] bg-gray-100 border-solid border-gray-200 p-4  border-[1px] border-t-0 top-[75px] right-1 z-10 transition-all ease-in-out duration-200 ${
            hidden ? "opacity-0 hidden" : "opacity-100 "
          }`}
        >
          <button
            onClick={handleCartQuit}
            className="bg-cross-logo bg-cover h-2 w-2 border-none pointer-events-auto self-end"
          ></button>

          <div className="flex justify-center font-courierbold mb-[-15px]">
            <h1>YOUR CART</h1>
          </div>
          <hr className="border-1 border-solid border-black" />
          <div style={{ maxHeight: "250px", overflowY: "auto" }}>
            <ul className="flex flex-col ">
              {cart.map((item) => {
                return (
                  <li key={item.productId}>
                    <div className="flex gap-3 my-2  items-center">
                      <div className="flex-1 max-w-[145px]">
                        <div
                          className="font-courierbold overflow-x-auto whitespace-nowrap"
                          style={{ width: "145px" }}
                        >
                          {item.name}
                        </div>
                      </div>
                      <div className="grid grid-cols-[28px_65px_75px_16px] gap-2">
                        <span className="font-primary text-[13px] mx-2 text-blue-400">
                          {item.quantity}
                        </span>
                        <span className="font-primary text-sm">
                          {item.price}$
                        </span>
                        <span className="font-courierbold">
                          {Math.round(item.quantity * item.price * 100) / 100}$
                        </span>
                        <span>
                          <button
                            onClick={() => handleDelete(item.productId)}
                            className="bg-cross2-logo bg-cover h-3 w-3 border-none pointer-events-auto "
                          ></button>
                        </span>
                      </div>
                    </div>
                    <hr className=" border-solid border-black border-dotted" />
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center font-primary gap-3 mt-3">
              {cart.length === 0 ? (
                "Total: 0$"
              ) : (
                <>
                  Total:{" "}
                  <div className="font-courierbold">
                    {" "}
                    {parseFloat(
                      cart.reduce(
                        (total, item) => item.quantity * item.price + total,
                        0
                      )
                    ).toFixed(2)}
                    $
                  </div>
                </>
              )}
            </div>
          </div>
          <Link
            to="/checkout"
            className="flex justify-center items-center font-courierbold text-white bg-black w-full "
          >
            Checkout
          </Link>
        </section>
      </header>

      {name === "shop" ? (
        <Shop
          handleTest={handleCartClick}
          items={items}
          handleAdd={handleAdd}
        />
      ) : name === "checkout" ? (
        <Checkout cart={cart} handleDelete={handleDelete} />
      ) : !name ? (
        <Home />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;

/*
          item.productId === product.id && e.currentTarget.quantity.value //case where add item while the user is in the item's own page
            ? {
                ...item,
                quantity: item.quantity + e.currentTarget.quantity.value,
              }
            : item.productId === product.id && !e.currentTarget.quantity.value //case where add item while the user is in categories
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
*/
