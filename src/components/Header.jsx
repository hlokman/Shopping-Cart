import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  return (
    <>
      <header className="flex justify-around items-center bg-white p-4">
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
    </>
  );
}

export default Header;
