function BackpackPage({ filteredItems, handleSub }) {
  const backpackItem = filteredItems.filter((item) => item.id === 1);

  /*const handleSubmit = (e) => {
    e.preventDefault();
    testHere(e);
  };*/

  return (
    <>
      <div className="flex flex-col gap-10 w-[100%]">
        <h1 className="font-courierbold text-xl flex justify-center items-center text-center">
          {backpackItem[0].category}
        </h1>
        <div className="flex justify-center items-center content-center gap-10 flex-wrap">
          <div className=" ">
            <img
              src={backpackItem[0].image}
              alt="backpack"
              className="max-w-[350px] min-w-[230px] w-full flex-[1_1_250px]"
            />
          </div>
          <div className="max-w-[450px] flex-[1_1_250px] flex flex-col gap-5">
            <h1 className="flex items-center justify-center text-center font-courierbold">
              {backpackItem[0].title}
            </h1>
            <p className="font-primary">{backpackItem[0].description}</p>
            <p className="font-bold text-2xl flex justify-end">
              {backpackItem[0].price}$
            </p>
            <form
              onSubmit={(e) => handleSub(e, backpackItem[0])}
              action="#"
              className="flex justify-center items-center gap-6"
            >
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="quantity" className="block font-primary">
                  Quantity:{" "}
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  max={40}
                  required
                  /*value={1}*/
                  /*onSubmit?*/
                  className="flex justify-center items-center border-solid border-grey border-[1px] w-[45px] rounded-lg p-1 text-sm"
                />
              </div>
              <button
                //type="submit"
                style={{ wordSpacing: "-6px" }}
                className="font-courierbold p-2 transition ease-in-out duration-500 hover:scale-110 hover:bg-black hover:text-white rounded-xl "
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackpackPage;
