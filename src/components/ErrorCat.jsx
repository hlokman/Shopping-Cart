import { Link } from "react-router-dom";

function ErrorCat() {
  return (
    <>
      <h1 className="font-courierbold italic">
        Oops, this category doesn't exist!
      </h1>
      <Link
        to="/"
        style={{ wordSpacing: "-3px" }}
        className="font-primary italic underline text-blue-800"
      >
        Return to Home Page
      </Link>
    </>
  );
}

export default ErrorCat;
