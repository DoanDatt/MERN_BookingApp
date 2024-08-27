import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="flex justify-between container mx-auto">
        <span className="text-3xl font-bold text-white tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex gap-4 text-white font-bold tracking-tight ">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
