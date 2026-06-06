import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

      <h1 className="text-8xl font-extrabold text-yellow-400">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-400">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold"
      >
        Back To Home
      </Link>

    </div>
  );
};

export default NotFound;
