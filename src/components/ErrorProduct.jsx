import { Link } from "react-router-dom";

function ErrorProduct() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-courierbold italic">
          Oops, this product doesn't exist!
        </h1>
        <Link
          to="/"
          style={{ wordSpacing: "-3px" }}
          className="font-primary italic underline text-blue-800"
        >
          Return to Home Page
        </Link>
      </div>
    </>
  );
}

export default ErrorProduct;
