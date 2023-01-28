import React, { useEffect, useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Fade from "react-reveal/Fade";

import { YoutubeVideo } from "components";


function CarouselTratores(props) {

  const [isMobile, setMobile] = useState(true);

  useEffect(() => {

    setMobile(true);

    if (window.innerWidth >= 920) {
      setMobile(false);
    }

  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id="">
      <Fade top>
        <Content className="d-flex col-12 row">
          <div className="title col-12">
            Conheça a Barbo
          </div>
        <YoutubeVideo />
        </Content>
      </Fade>

    </ScrollableAnchor>

  );
}

export default CarouselTratores;