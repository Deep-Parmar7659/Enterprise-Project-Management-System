import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">EPMS</h1>
      <div className="flex items-center gap-4">
        <span>{user?.name}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
