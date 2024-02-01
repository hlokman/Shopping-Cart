import "../style/App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import Checkout from "./Checkout";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";

function App() {
  const { name } = useParams();
  const [itemsCart, setItemsCart] = useState(0);
  const [items, setItems] = useState([]);
  const selectedItemsId = [1, 2, 3, 6, 7, 10, 14, 15, 16, 20]; //selected items from the fakestore API
  const [cart, setCart] = useState([]); // useState([{ productId: 111, name: "shirt", price: 20, quantity: 1 }]);

  const [popCart, setPopCard] = useState("hidden");
  const [hidden, setHidden] = useState(true);
  const [alert, setAlert] = useState(false);
  const [top, setTop] = useState(true);
  //
  const handleCartClick = () => {
    if (hidden) {
      setHidden(false);
    } else {
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
          item.productId === product.id &&
          item.quantity < 99 &&
          item.quantity + quantityAdded <= 99 //To set the max number of one item to 99
            ? {
                ...item,
                quantity: item.quantity + quantityAdded,
              }
            : item
        )
      );

      cart.forEach((item) => {
        if (
          (item.productId === product.id && //to set a message if max number is reached
            item.quantity >= 99) ||
          (item.productId === product.id && item.quantity + quantityAdded > 99)
        ) {
          console.log("MAX DE MAX");
          triggerAlert();
        }
      });
    }

    console.log(e.target.tagName);
    setItemsCart(itemsCart + 1);
    if (e.target.tagName === "FORM") e.target.reset(); //for the cases where the user is in the item's own page or the categories
  };

  const triggerAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 1000);
  };

  const handleDelete = (productId) => {
    setCart((prevState) =>
      prevState.filter((item) => item.productId !== productId)
    );
  };

  useEffect(() => {
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
        console.log(error.message);
      }
    };

    const fetchAllItems = async () => {
      const fetchPromises = selectedItemsId.map((item) => fetchItem(item));
      const allResponses = await Promise.all(fetchPromises);
      setItems(allResponses); //! in order to avoid duplication when fetching
    };
    fetchAllItems();
  }, []);

  //SCROLL LOGIC
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", scrollHandler); //So every time we scroll

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  console.log(items);
  console.log("CART:  ", cart);
  return (
    <div className="relative">
      <header
        className={`flex justify-around items-center bg-gray-200 p-4 relative mobile:justify-between mobile:gap-6 sticky top-0 z-50 ${
          !top && "shadow-[0px_0px_40px_#888]"
        }`}
      >
        <h1 className="text-2xl font-courierbold mobile:text-center">
          Great Shop
        </h1>
        <nav className="flex gap-10 font-primary text-lg mobile:gap-5">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/shop" className="">
            Shop
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
        </nav>
        <div className="mobile:mr-5 mobile:ml-[-5px]">
          <button
            onClick={handleCartClick}
            className="bg-cart-logo bg-cover h-8 w-8 border-none pointer-events-auto relative"
          ></button>
          <span className="font-courierbold absolute bottom-4 mobile:bottom-7 mobile:text-sm">
            {cart.length}
          </span>
        </div>
        {/*Cart ----> */}
        <div
          className={`absolute top-[130px] left-1/2 -translate-x-1/2 w-[355px] mobile:scale-[0.9] z-20 bg-white shadow-[0px_0px_40px_black]  p-[1px] px-3 text-center font-courierbold text-red-600 italic rounded-lg transform transition-all  duration-500 ${
            alert
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          You can't take more than 99 items!
        </div>
        <section
          className={`absolute flex flex-col gap-3 w-[435px] min-h-[100px] bg-gray-100 border-solid border-gray-200 p-4  border-[1px] border-t-0 top-[75px] right-1 z-50 transition-all ease-in-out duration-200 ${
            hidden ? "opacity-0 hidden" : "opacity-100 "
          }
           mobile:w-[360px] mobile:left-1/2 mobile:-translate-x-1/2 mobile:top-[103px]`}
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
                            className="bg-cross2-logo bg-cover h-3 w-3 border-none pointer-events-auto ml-4"
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
            onClick={handleCartClick}
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
      ) : name === "contact" ? (
        <Contact />
      ) : !name ? (
        <Home />
      ) : (
        <ErrorPage />
      )}

      <footer className="flex justify-center font-courierbold items-center h-[30px] bg-gray-200 text-sm">
        Copyright © hlokman 2024
      </footer>
    </div>
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

//flex-[1_1_250px]
