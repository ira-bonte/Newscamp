const Sidebar = () => {
  return (
    <div className="w-[15%] flex flex-col gap-3">
      {/* profile */}
      <div className="bg-white p-6 flex flex-col gap-3 rounded-xl">
        <div className="w-[50px] h-[50px]  bg-black rounded-full">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFkhnaFdknEow/profile-displayphoto-shrink_800_800/0/1682266568018?e=1699488000&v=beta&t=CZrffYTkc8ROIVaeEnbP1xLAFxhXROkINOCRdxpoXm0"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-sm">IRADUKUNDA Bonte</h1>
      </div>

      {/* Categories */}

      <div className="p-6 bg-white flex flex-col gap-3 rounded-xl">
        <h2 className="pl-7">Category</h2>

        {/* list of categories */}
        <button type="button" class="cursor-pointer ... text-xs text-blue-400 pr-11">
           Politics
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
           Business
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
          Finance
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
          Technology
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
          Media
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
           Sports
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
           Media
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
           Administration
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
          Defense
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
         Music
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
         Energy
        </button>
        <button type="button" class="cursor-pointer ... text-xs text-gray-400 pr-11">
           Game
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
