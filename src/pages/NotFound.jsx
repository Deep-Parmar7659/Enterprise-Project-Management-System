import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-gray-500 mt-4">Page not found</p>

      <Link to="/" className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
        Back To Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
