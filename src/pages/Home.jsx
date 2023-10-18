import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import { AiOutlineEye } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* Hero section */}

      <section className="relative bg-[url(../../../images/8.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Discover Nice Articles
              <strong className="block font-extrabold text-blue-600">
                Here
              </strong>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-white">
               Create account to get updated on news for each day! Validz News 
               gives and make sure you're updated on the new world for the day!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              {/* <Link to="/" className="font-semibold">
                   NEWS
               </Link> */}

              <a
                href="/articles"
                className="block w-full sm:w-auto rounded bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-white shadow hover:bg-white-600 hover:text-white-500 focus:outline-none focus:ring active:bg-blue-400"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full sm:w-auto rounded bg-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-black shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      


    </>
  );
};

export default Home;
