import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-blue-800 py-6">
      <div className=" container mx-auto flex justify-between">
        <p className="tracking-tight text-3xl font-bold text-white">
          <Link to="/">Booking.com</Link>
        </p>
        <span className=" text-white gap-4 flex items-center ">
          <p className=" cursor-pointer font-bold">Privacy policy</p>
          <p className=" cursor-pointer font-bold">Terms of service</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
