import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between ">
        <span className="font-bold text-white text-3xl">
          <Link to="/">MernBooking.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/signin"
            className="flex items-center text-blue-600 px-3 font-bold bg-white rounded-sm hover:bg-gray-200"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Header;
