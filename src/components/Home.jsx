import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="bg-sky-img bg-no-repeat bg-cover min-h-[calc(100vh-71px)] opacity-95 flex justify-center items-center content-center gap-10 flex-wrap p-7 ">
        <div className="max-w-[370px] flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold text-white font-courierbold">
            The Greatest Shop
          </h1>
          <p className="text-white font-primary leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar nibh arcu, sed auctor erat maximus sit amet.
          </p>
          <Link
            to="/shop"
            className="bg-white rounded font-bold font-courierbold flex justify-center items-center"
          >
            Go Shopping
          </Link>
        </div>
        <div className="bg-suit-img bg-no-repeat bg-cover w-[370px] min-h-[320px] rounded-lg shadow-[0px_0px_14px_black]"></div>
      </main>
    </>
  );
}

export default Home;
