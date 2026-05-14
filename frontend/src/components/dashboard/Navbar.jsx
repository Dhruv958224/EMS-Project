import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      sessionStorage.clear();

      logout();


      navigate("/login");
    }
  };

  const isAdmin = user?.role === "admin";

  return (
    <div
      className={`h-16 bg-teal-600 px-6 text-white shadow flex items-center justify-between ${
        isAdmin ? "ml-64" : ""
      } transition-all duration-300`}
    >
      <p className="text-lg font-medium">Welcome {user?.name || "User"}</p>
      <button
        onClick={handleLogout}
        className="bg-white text-teal-600 px-4 py-1 rounded hover:bg-gray-200 transition font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
