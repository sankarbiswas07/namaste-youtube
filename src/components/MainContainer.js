import ButtonList from "../components/ButtonsList"
import VideoContainer from "../components/VideoContainer"

const MainContainer = () => {
  return (
    <div className="col-span-9 bg-slate-700" >
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;