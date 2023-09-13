import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center p-[1em] fixed w-full mt-[0px] z-50">
      {/* Logo */}
      <Link to="/" className="font-semibold">
        NEWS
      </Link>

      <div className="flex gap-6 text-gray-500 text-sm class">
         <button type="button" class="cursor-pointer ...">
           Top stories
        </button>
        <button type="button" class="cursor-pointer ...">
            Magazine
        </button>
        <button type="button" class="cursor-pointer ...">
           Contact Us
        </button>
      </div>

      {/* Subscribe button */}

      <button className="bg-black text-white text-sm py-2 px-3 rounded-xl">
        Subscribe
      </button>
    </div>
  );
};

export default Navbar;
