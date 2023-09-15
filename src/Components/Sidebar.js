import { FaHouse } from "react-icons/fa6";
import home from "../Assets/home.png"
import shots from "../Assets/yt-shots.png"
import subscribe from "../Assets/subscribe.png"
import music from "../Assets/music.png"
import library from "../Assets/library.png"
import history from "../Assets/history.png"
import videolibrary from "../Assets/videolibrary.png"
import watchlater from "../Assets/watchlater.png"
import download from "../Assets/download.png"
import like from "../Assets/thums.png"
import trending from "../Assets/trending.png"
import flim from "../Assets/movie.png"
import shopping from "../Assets/shopping.png"

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="w-60 shadow-xl">
      <div className="sidemenu-1 border-b-2 border-black">
        <ul className="flex flex-col justify-center font-bold py-2 px-5">
          <li className="flex items-center py-2">
            <Link className="flex items-center" to="/"><img className="h-6 mr-2" src={home} />Home</Link></li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={shots} alt="shots" />Shots</li>
          <li className="py-2 flex">
            <img className="h-6 mr-2" src={subscribe} />
            Subscription
          </li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={music} />Youtube Music</li>
        </ul>
      </div>
      <div className="sidemenu-2 border-b-2 border-black">
        <ul className="flex flex-col justify-center  font-bold py-2 px-5">
          <li className="flex items-center py-2"><img className="h-6 mr-2" src={library} alt="library" />Library</li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={history} alt="history" />History</li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={videolibrary} alt="your videos" />Your Videos</li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={watchlater} />Watch Later</li>
          <li className="py-2 flex"> <img className="h-6 mr-2" src={download} alt="download" />Downloads</li>
          <li className="py-2 flex"><img className="mr-2" src={like} alt="" />Like Videos</li>
        </ul>
      </div>
      <div className="sidemenu-3 border-b-2 border-black">
        <h1 className="font-bold pt-2 px-2">Explore</h1>
        <ul className="flex flex-col justify-center  font-bold py-2 px-5">
          <li className="flex items-center py-2"> <img className="h-6 mr-2" src={trending} alt="" />Trending</li>
          <li className="py-2 flex"><img className="h-6 mr-2" src={shopping} alt="" />Shoping</li>
          <li className="py-2 flex"> <img className="h-6 mr-2" src={music} alt="music" />Music</li>
          <li className="py-2 flex"> <img className="h-6 mr-2" src={flim} alt="flim" />Flim</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;