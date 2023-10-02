import { AiOutlineEye } from "react-icons/ai";

const RelatedNews = () => {
  return (
    <div className=" w-full md:w-1/4">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <h2>Related News</h2>
        <button type="button" class="cursor-pointer ... text-xs text-gray-600 ">
           See All
        </button>
      </div>

      {/* list of related news */}

      <div className="flex flex-col gap-4 mt-4">
        {/* Related news card */}
        <div className="bg-white  p-4 rounded-xl flex flex-col gap-2">
          {/* image container */}
          <div className="bg-black w-full h-[150px] rounded-xl">
            <img
              src="../../../images/10.jpg"
              alt="politics"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* short details */}

          <div className="ml-4 flex justify-between">
            <div className="bg-blue-100 rounded-2xl">
              <p className="text-blue-400 text-xs px-2 py-1 font-thin uppercase">
                Read more
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
        </div>
        {/* Related news card */}
        <div className="bg-white mt-2 p-4 rounded-xl flex flex-col gap-2">
          {/* image container */}
          <div className="bg-black w-full h-[150px] rounded-xl">
            <img
              src="../../../images/12.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* short details */}

          <div className="ml-4 flex justify-between">
            <div className="bg-blue-100 rounded-2xl">
              <p className="text-blue-400 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
                Read more
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
        </div>
        {/* Related news card */}
        <div className="bg-white mt-2 p-4 rounded-xl flex flex-col gap-2">
          {/* image container */}
          <div className="bg-black w-full h-[150px] rounded-xl">
            <img
              src="../../../images/14.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* short details */}

          <div className="ml-4 flex justify-between">
            <div className="bg-blue-100 rounded-2xl">
              <p className="text-blue-400 text-xs px-[0.7em] py-[0.25em] font-thin uppercase">
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
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
