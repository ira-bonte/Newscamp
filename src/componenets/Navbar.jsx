import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center p-4 md:p-4 fixed w-full z-50">
      {/* Logo */}
      <Link to="/" className="font-semibold text-xl md:text-2xl">
        NEWS
      </Link>

      <div className="flex gap-2 md:gap-6 mt-4 md:mt-0">
         <button type="button" className="cursor-pointer text-sm md:text-base">
          <Link to="/form">Top stories</Link>          
        </button>
        <button type="button" className="cursor-pointer text-sm md:text-base">
        <Link to="/form">Magazine</Link>
        </button>
        <button type="button" className="cursor-pointer text-sm md:text-base">
        <Link to="/articlesdetails">Contact Us</Link>
        </button>
      </div>

      {/* Subscribe button */}

      <button className="bg-black text-white text-sm md:text-base py-2 px-3 md:px-4 rounded-xl mt-4 md:mt-0">
        Subscribe
      </button>
    </div>
  );
};

export default Navbar;
