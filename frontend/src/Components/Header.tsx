import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-y-2">
          <Link
            to="/sign-in"
            className="flex items-center text-blue-600 px-3 bg-white font-bold hover:bg-gray-100 "
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Header;
