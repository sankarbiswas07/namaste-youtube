const VideoCard = ({
  snippet: {
    title,
    thumbnails,
    channelTitle,
  },
  statistics: { viewCount, likeCount, favoriteCount, commentCount }
}) => {

  return (
    <div className="w-[350px] p-1 m-2" >
      <div>
        <img className="h-[200px]  rounded-2xl" alt={title} src={thumbnails.medium.url} />
      </div>
      <div className="flex p-2">
        <div className="flex-none  w-14 h-14">
          <img className="rounded-full" alt={title} src="https://yt3.ggpht.com/ytc/AL5GRJWfonCi2qeHn3v37TAFjuG9Ke7Asm6e8OloH1H-gg=s68-c-k-c0x00ffffff-no-rj" />
        </div>

        <div className="ml-3 flex-auto">
          <div className="flex flex-col h-[120px] justify-between">
            <h4 className="text-gray-900 font-medium h-[52px] overflow-hidden">{title}</h4>
            <div className=" h-[60px] text-sm text-gray-400  font-light ">
              <p className="py-2">{channelTitle}</p>
              <span className="my-3">{Number(viewCount / 1000).toFixed(2)}K views</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default VideoCard;