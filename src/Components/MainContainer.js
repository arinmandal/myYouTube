import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="">
      <div className="overflow-x-scroll no-scrollbar w-full">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  )
}

export default MainContainer