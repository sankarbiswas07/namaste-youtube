import { useSelector } from 'react-redux';


const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)


  return (
    <div className="col-span-1">
      {
        !isMenuOpen && (<ul className="">
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Home</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Shorts</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Subscription</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Originals</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Youtube Music</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Library</li>
          <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Download</li>
        </ul>)
      }
      {
        isMenuOpen && (<>
          <h4 className="mb-2" >Subscription</h4>
          <ul className="">
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Aksay Srivastava</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Ravi Gupta</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">T-Series</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Traversy Media</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Farmin</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Pen Movies</li>
          </ul>
          <hr className="my-[10px] border-black" />
          <h4 className="my-2">Explore</h4>
          <ul className="">
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Trending</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Ravi Gupta</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">T-Series</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Traversy Media</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Farmin</li>
            <li className="text-sm px-[20px] py-[8px] hover:bg-slate-100 hover:rounded-lg hover:shadow-sm font-light">Pen Movies</li>
          </ul>
        </>)
      }
    </div>
  );
}

export default SideBar;