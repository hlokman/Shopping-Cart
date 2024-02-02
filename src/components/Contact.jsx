import contactImg from "/assets/handshake.jpg";
function Contact() {
  return (
    <>
      <main className="bg-sky-img bg-no-repeat bg-cover min-h-[calc(100vh-101px)] opacity-95 flex justify-center items-center content-center gap-10 flex-wrap p-7 font-courierbold">
        <img
          src={contactImg}
          className="flex-[1_1_250px] min-w-[350px] min-h-[360px] max-w-[400px]  rounded-lg shadow-[0px_0px_6px_black] mobile:w-[95%] mobile:min-w-0"
        />

        <form
          action
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col bg-[rgba(255,255,255,0.15)]  backdrop-blur-[2px] border-solid border-gray-200  border-[1px] rounded-lg  p-2 flex-[1_1_250px] min-w-[350px] min-h-[360px] max-w-[600px] mobile:w-[95%] mobile:min-w-0 "
        >
          <div className="flex gap-2 w-full">
            <div className="grow">
              <label htmlFor="first_name" className="block text-black">
                First Name:
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                maxLength={22}
                required
                className="w-full bg-gray-200"
              />
            </div>
            <div className="grow">
              <label htmlFor="last_name" className="block text-black">
                Last Name:
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                maxLength={22}
                required
                className="w-full bg-gray-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mail" className="block text-black">
              Email:
            </label>
            <input
              type="mail"
              name="mail"
              id="mail"
              maxLength={15}
              required
              className="w-full bg-gray-200"
            />
          </div>
          <div className="flex flex-col grow">
            <label htmlFor="request" className="block text-black">
              Request:
            </label>
            <textarea
              placeholder="What's your request"
              maxLength={230}
              name="request"
              id="request"
              className="resize-none w-full grow bg-gray-200 p-1"
            />
          </div>
          <button className="text-white flex items-center justify-center self-center  w-[70px] mt-[7px] rounded bg-black text-white">
            Send
          </button>
        </form>
      </main>
    </>
  );
}

export default Contact;
