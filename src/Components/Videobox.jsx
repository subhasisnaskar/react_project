import React from 'react'
import youtubeplay from '../assesets/imgs/youtube_play.jpg'
import Modalbox from './Modalbox';
function Videobox() {
  return (
    <div className="youtube_play position-relative">
    <img src={youtubeplay} alt="" className='img-fluid' />
    <div className="play_video position-absolute">

      <Modalbox />
    </div>
  </div>
  )
}

export default Videobox
