import { useState, useEffect } from "react";

function Checkout({ cart, handleDelete }) {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shipping, setShipping] = useState(14.99);

  let total = parseFloat(
    cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  );

  useEffect(() => {
    total >= 100 ? setShipping(0) : setShipping(14.99);
  }, [total]);

  return (
    <main className="flex justify-center items-center content-center w-[full] p-8 gap-9 flex-wrap  min-h-[calc(100vh-101px)]">
      <section className="flex-[1_1_auto] flex flex-col justify-center items-center gap-3  mobile:gap-5 scale1:scale-[0.80]">
        {/* In order to adapt the margins (top/bottom) with the scales when the number of items in the cart increases*/}
        <div className="relative">
          <h1 className="font-courierbold text-3xl mr-[350px] mobile:mr-0 mobile:text-[20px] ">
            Shopping Cart.
          </h1>
          <h2 className="font-primary text-xl mr-[470px] mobile:mr-[200px]">
            Product(s):
          </h2>
          <p className="font-primary italic flex gap-3 ml-[-70px] text-sm text-center absolute top-[0] left-[380px] w-[300px] mobile:left-[240px] mobile:w-[180px]">
            (Shipping fees are free for all orders of at least 100$)
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-7">
            <div className="font-courierbold grid grid-cols-[62px_250px_30px_60px_60px] gap-4 items-center text-sm mobile:grid-cols-[40px_80px_30px_45px_80px]">
              <span></span>
              <span>Name:</span>
              <span>Qt:</span>
              <span>Price:</span>
              <span>Total:</span>
            </div>
            {cart.map((item) => {
              return (
                <li key={item.productId}>
                  <div className="grid grid-cols-[62px_250px_30px_60px_90px_20px] gap-4 items-center mobile:gap-2 mobile:grid-cols-[40px_80px_30px_45px_90px_20px]">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-[60px] w-full flex-[1_1_auto]"
                      />
                    </div>
                    <span className="font-primary max-w-[250px] flex mobile:text-xs mobile:text-center">
                      {item.name}
                    </span>
                    <span className="font-primary justify-self-center text-blue-400 mobile:text-xs">
                      {item.quantity}
                    </span>
                    <span className="font-primary mobile:text-xs">
                      {item.price}$
                    </span>
                    <span className="font-courierbold justify-self-center">
                      {parseFloat(item.price * item.quantity).toFixed(2)}$
                    </span>
                    <span>
                      <button
                        onClick={() => handleDelete(item.productId)}
                        className="bg-cross2-logo bg-cover h-4 w-4 border-none pointer-events-auto "
                      ></button>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="w-full border-solid border-black border-[1px] border-dotted" />
        <div>
          <div className="ml-[425px] mobile:ml-0">
            <div className="text-xl font-courierbold mobile:ml-[200px]">
              {total}$
            </div>
            <div className="font-primary italic flex gap-3 ml-[-70px] mobile:ml-[130px]">
              <p>Taxes:</p>
              <p>20%</p>
            </div>
            <div className="font-primary italic flex gap-3 ml-[-100px] mobile:ml-[99px]">
              <p>Shipping:</p>
              <p>{shipping}$</p>
            </div>

            <div className="font-courierbold text-xl  flex gap-3 ml-[-98px] mobile:text-3xl mobile:ml-0 scale1:text-3xl scale1:ml-[-108px]">
              <p className="mobile:w-[150px]">To pay:</p>
              <p>
                {total !== 0
                  ? parseFloat(total * 1.2 + shipping).toFixed(2)
                  : 0}
                $
              </p>
            </div>
          </div>
        </div>
      </section>

      <aside className="flex-[1_1_480px] flex flex-col justify-center items-center gap-3">
        <h1 className="font-courierbold text-3xl"> Payment Infos.</h1>
        <div className="bg-gray-200 p-8 w-full max-w-[800px] flex flex-col gap-7">
          <fieldset>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name=""
                id="card"
                onChange={() => setPaymentMethod("card")}
                checked={paymentMethod === "card" && true}
              />
              <span className="bg-card-logo bg-cover bg-center h-[40px] w-[60px] pt-"></span>
              <label htmlFor="card" className="ml-6 font-bold">
                Credit Card
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name=""
                id="paypal"
                onChange={() => setPaymentMethod("paypal")}
                checked={paymentMethod === "paypal" && true}
              />
              <span className="bg-paypal-logo bg-cover h-[60px] w-[60px] "></span>
              <label htmlFor="paypal" className="ml-6 font-bold">
                PayPal
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name=""
                id="alipay"
                onChange={() => setPaymentMethod("alipay")}
                checked={paymentMethod === "alipay" && true}
              />
              <span className="bg-alipay-logo bg-cover h-[60px] w-[60px] "></span>
              <label htmlFor="alipay" className="ml-6 font-bold">
                Alipay
              </label>
            </div>
            <div className="flex gap-4 font-courierbold">
              <input
                type="radio"
                name=""
                id="other"
                onChange={() => setPaymentMethod("other")}
                checked={paymentMethod === "other" && true}
              />
              <label htmlFor="other">Other</label>
            </div>
          </fieldset>
          <div>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Coupon"
                className="w-full h-[30px] p-3 border-solid border-black border-2 border-dotted font-primary"
              />
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="text-white bg-black p-1 font-courierbold rounded w-[80px] text-sm hover:bg-gray-800"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
        <div className="w-full max-w-[800px]">
          <button className="text-white bg-black p-[3px] font-courierbold rounded w-full  text-lg hover:bg-gray-800">
            Continue to checkout
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Checkout;
