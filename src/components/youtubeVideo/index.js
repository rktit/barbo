import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import Content from "./style";
import conhecaBarbo from "images/home/conhecaBarbo.png";

function YoutubeVideo(props) {

  const [isMobile, setMobile] = useState(3);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('video', props);
    setShow(false);
    let type = 1;
    if (window.innerWidth >= 920) {
      type = 2;
    }
    if (window.innerWidth >= 1280) {
      type = 3;
    }
    setMobile(type);
    setShow(true);
  }, [window.innerWidth]);

  const opts = {
    height: isMobile === 1 ? 320 : 400,
    width: '100%',
    playerVars: {
      modestbranding: 1,
    },
  };

  const videoId = props.videoId;

  return (
    <Content className="col-12 row">
      <div className={`content col-12 ${props.className}`}>
        {/* <YouTube videoId={videoId} opts={opts}/> */}
        <div className="flex">
          <img className="image" src={conhecaBarbo} />
        </div>
        {/* <div className="texts">
          <strong>{props.title}</strong><br />
        </div> */}
      </div>
    </Content>

  );

}

export default YoutubeVideo;

