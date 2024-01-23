import "../style/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className="flex justify-around items-center bg-white p-4">
        <h1 className="text-2xl font-courierbold ">Great Shop</h1>
        <nav className="flex gap-10 font-primary text-lg">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            Shop
          </Link>
          <Link to="/" className="">
            About
          </Link>
        </nav>
        <div>
          <button className="bg-cart-logo bg-cover h-8 w-8 border-none pointer-events-auto"></button>
        </div>
      </header>

      <main className="bg-sky-img bg-no-repeat bg-cover min-h-[calc(100vh-71px)] opacity-95 flex justify-center items-center content-center gap-10 flex-wrap  ">
        <div className="max-w-[370px] flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold text-white font-courierbold">
            The Greatest Shop
          </h1>
          <p className="text-white font-primary leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar nibh arcu, sed auctor erat maximus sit amet.
          </p>
          <button className="bg-white rounded font-bold font-courierbold">
            Go Shopping
          </button>
        </div>
        <div className="bg-suit-img bg-no-repeat bg-cover w-[370px] min-h-[320px] rounded-lg shadow-[0px_0px_14px_black]"></div>
      </main>
    </>
  );
}

export default App;
