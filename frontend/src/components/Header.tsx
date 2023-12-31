import { Link } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-5">
      <div className="flex justify-between container mx-auto">
        <span className="text-2xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="my-hotels">My Hotels</Link>
              <button>Sign Out</button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className=" flex items-center text-blue-600 px-3  font-bold bg-gray-50 rounded shadow hover:bg-gray-100 hover:cursor-pointer hover:shadow-slate-400"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
