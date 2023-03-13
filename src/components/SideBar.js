import { useSelector } from 'react-redux';


const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  const sideBarClass = ` col-span-1
  ${!isMenuOpen ? " min-w-[74px] max-w-[74px]" : " min-w-[200px] max-w-[200px]"}
  `

  const sideBarFontClass = ` 
  ${!isMenuOpen ? " text-xs" : " text-sm"}
  ${!isMenuOpen ? " px-[1px] py-[8px]" : " px-[20px] py-[8px]"}
  ${!isMenuOpen ? " min-w-[74px] max-w-[74px]" : " min-w-[200px] max-w-[200px]"}
  ${!isMenuOpen ? " min-h-[64px] max-h-[64px]" : " min-w-[200px] max-w-[200px]"}
  hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light`


  return (
    <div className={sideBarClass}>
      {
        !isMenuOpen && (<ul className="">
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Home</span>
            </div>
          </li>
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Shorts</span>
            </div>
          </li>
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Subscriptions</span>
            </div>
          </li>
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Originals</span>
            </div>
          </li>
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Youtube Music</span>
            </div>
          </li>
          {/* <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Library</span>
            </div>
          </li>
          <li className={sideBarFontClass}>
            <div className='flex flex-col items-center my-1'>
              <img className="w-[24px]" alt="" src="sidebar/home.png" />
              <span className='truncate'>Download</span>
            </div>
          </li> */}
        </ul>)
      }
      {
        isMenuOpen && (<>
          <ul className="">
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/home.png" />
                <span className='ml-3 text-center'>Home</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/fast-time.png" />
                <span className='ml-3'>Shorts</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/subscribe.png" />
                <span className='ml-3'>Subscriptions</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/video.png" />
                <span className='ml-3'>Originals</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/live-streaming.png" />
                <span className='ml-3'>Youtube Music</span>
              </div>
            </li>
            {/* <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/home.png" />
                <span className='ml-3'>Library</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <img className="w-[24px]" alt="" src="sidebar/home.png" />
                <span className='ml-3'>Download</span>
              </div>
            </li> */}
          </ul>
          <hr className="my-[10px] border-black" />

          <ul className="">
            <li className="px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-semibold ">
              <h4>Subscriptions</h4>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex' >
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Aksay Srivastava</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Ravi Gupta</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>T-Series</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Traversy Media</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Farmin</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Pen Movies</span>
              </div>
            </li>
          </ul>
          <hr className="my-[10px] border-black" />
          <ul className="">
            <li className="px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-semibold ">
              <h4>Explore</h4>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Trending</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Ravi Gupta</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>T-Series</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Traversy Media</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex items-center my-1'>
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Farmin</span>
              </div>
            </li>
            <li className={sideBarFontClass}>
              <div className='flex' >
                <div className="flex-none  w-8 h-8">
                  <img className="rounded-full" alt="" src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <span className='ml-3'>Pen Movies</span>
              </div>
            </li>
          </ul>
        </>)
      }
    </div>
  );
}

export default SideBar;