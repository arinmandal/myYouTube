const VideoCard = ({ info }) => {

  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(snippet)
  const { viewCount } = statistics;
  return (
    <div className="videocard rounded-md w-56 bg-slate-200 mx-1 mb-2 cursor-pointer">
      <img className="rounded-md" src={thumbnails.medium.url} alt="" />
      <div className="channel-description p-2 font-semibold text-xs">
        {/* <div className="channel-dp w-10 h-10 m-2 bg-blue-500 rounded-full">
          <img src="" alt="" />
          hello
        </div> */}
        <ul>
          <li>{channelTitle}</li>
          <li>{title}</li>
          <li>{viewCount} views</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCard