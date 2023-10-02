import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

const Details = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/3 mx-auto">
      <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
        <h2 className="font-medium text-lg">Politics</h2>

        {/* image */}
        <div className="w-full h-[250px] bg-black rounded-xl">
          <img
            src="https://www.livemint.com/lm-img/img/2023/09/01/1600x900/Russia-Putin-1_1693556892494_1693557570636.jpg"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Social section */}

        <div className="ml-4 flex justify-between">
          <div className="bg-blue-100 rounded-2xl">
            <p className="text-blue-400 text-xs px-[0.7em] py-[0.4em] font-thin uppercase">
              congress
            </p>
          </div>

          {/* social items */}
          <div className="flex gap-3">
            <div className="flex gap-2 text-gray-500  items-center">
              <AiOutlineEye />
              <p className="text-xs text-black font-[600]">2.5m</p>
            </div>

            <div className="flex gap-2 text-gray-500  items-center">
              <AiOutlineComment />
              <p className="text-xs text-black font-[600]">15k</p>
            </div>

            <div className="flex gap-2 text-gray-500  items-center">
              <AiOutlineShareAlt />
              <p className="text-xs text-black font-[600]">39k</p>
            </div>
          </div>
        </div>

        {/* headline */}
        <h2 className="w-full md:w-[60%] pl-4 text-lg">
          Intelligence Committee to begin Circulating draft Ukraine report
          Monday
        </h2>

        {/* author section */}

        <p className="text-gray-500 pl-4 text-xs">
          By  Ira Validz
        </p>
      </div>

      {/* paragraphs */}

      <div className="text-gray-500 mt-6 font-[100] pl-[2.2em] text-xs flex flex-col gap-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vero
          perspiciatis veniam, repudiandae quae temporibus fugiat et facere
          exercitationem cupiditate laudantium laboriosam deleniti iusto
          inventore officiis voluptatibus culpa perferendis delectus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vero
          perspiciatis veniam, repudiandae quae temporibus fugiat et facere
          exercitationem cupiditate laudantium laboriosam deleniti iusto
          inventore officiis voluptatibus culpa perferendis delectus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vero
          perspiciatis veniam, repudiandae quae temporibus fugiat et facere
          exercitationem cupiditate laudantium laboriosam deleniti iusto
          inventore officiis voluptatibus culpa perferendis delectus!
        </p>
      </div>
    </div>
  );
};

export default Details;
