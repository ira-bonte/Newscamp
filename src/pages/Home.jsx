import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import { AiOutlineEye } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* Hero section */}

      <section className="relative bg-[url(../../../images/3.jpg)] bg-cover bg-center bg-no-repeat">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea! 
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              {/* <Link to="/" className="font-semibold">
                   NEWS
               </Link> */}

              <a
                href="/Form"
                className="block w-full sm:w-auto rounded bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-white shadow hover:bg-white-600 hover:text-blue-500 focus:outline-none focus:ring active:bg-blue-400"
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

      {/* Articles */}

      <div className="mt-4">
        <h2 className="text-center font-medium text-xl sm:text-2xl">Articles</h2>

        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/form"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/8.jpg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Rwanda Coding Academy and SOS Technical High
             School approves on collaboration in Ed.system
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/6.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              Dems move rapidly on impeachment with first judiciary Committee
              hearing
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
