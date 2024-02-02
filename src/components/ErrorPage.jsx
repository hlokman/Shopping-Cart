import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-[calc(100vh-101px)] flex flex-col  items-center mt-10">
      <h1 className="font-courierbold italic">
        Oops, this route doesn't exist!
      </h1>
      <Link
        to="/"
        style={{ wordSpacing: "-3px" }}
        className="font-primary italic underline text-blue-800"
      >
        Return to Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;
