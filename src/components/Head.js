const Head = () => {
  return (
    <div >
      <div className="flex h-[60px] bg-blue-50 px-[20px] justify-between">
        {/* hamburger + brand */}
        <div className="flex items-center mr-4">
          <img className="w-5 h-6 mr-4" alt="menu" src="menu.png" />
          <div class="flex items-center">
            <img className="h-10 mr-1" alt="youtube-logo" src="youtube.png" />
            <h2 className="font-bold">Premium</h2>
          </div>
        </div>
        {/* search and mic. */}
        <div className="flex items-center w-2/5">
          {/* search */}
          <label className="relative block mr-4 w-full">
            <span className="sr-only">Search</span>
            <input className="placeholder:italic
             placeholder:text-slate-400
              block bg-white w-full 
              border border-slate-400 
              py-2 pl-3 pr-3 shadow-sm
              focus:outline-none focus:drop-shadow
            focus:ring-gray-300 focus:ring-1 
              sm:text-sm
              rounded-l-3xl rounded-r-3xl"
              placeholder="Search" type="text" name="search" />

            <div className="absolute 
            inset-y-0 right-0 
            flex items-center 
            px-4 bg-gray-50 hover:bg-gray-100
            border border-slate-400
            rounded-r-3xl">
              <img className="w-[20px]" alt="search" src="search.png" />
            </div>
          </label>

          {/* mic */}
          <div className="w-[50px]">
            <img className="w-[20px]" alt="mic" src="mic.png" />
          </div>
        </div>
        {/* record + notification + Avatar */}
        <div className="flex items-center justify-between">
          <div className="w-[50px]">
            <img className="w-[20px]" alt="video" src="video.png" />
          </div>
          <div className="w-[50px]">
            <img className="w-[20px]" alt="bell" src="bell.png" />
          </div>
          <div className="w-[50px]">
            <img className="w-[20px]" alt="avatar" src="avatar.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;