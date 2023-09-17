import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../Utils/Constant";
import VideoCard from "./VideoCard";
const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className="flex flex-wrap justify-evenly ">
      {videos.map((videos) =>
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          <VideoCard info={videos} />
        </Link>
      )}
    
    </div>
  )
}

export default VideoContainer