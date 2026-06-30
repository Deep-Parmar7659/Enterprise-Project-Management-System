import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">
        403
      </h1>

      <p className="mt-4 text-gray-500">
        You are not authorized to access this page.
      </p>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Back To Dashboard
      </Link>
    </div>
  );
}

export default Unauthorized;