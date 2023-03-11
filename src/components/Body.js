import SideBar from './SideBar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className='p-[10px] grid grid-cols-10 gap-2'>
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default Body;