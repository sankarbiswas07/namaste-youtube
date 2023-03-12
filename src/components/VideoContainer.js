import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [Videos, SetVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    console.log(json)
    SetVideos(json.items)
  }

  return (
    <div className='flex flex-wrap container mx-auto'>
      {
        !Videos.length && (<span>Data is loading</span>)
      }
      {
        Videos.length && Videos?.map((video, i) => <VideoCard {...video} key={i} />)
      }
    </div>
  );
}

export default VideoContainer;