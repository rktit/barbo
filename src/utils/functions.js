import React from "react";

function compareDate(d, m, y, hour, min, img, url) {
  const compare = new Date().getTime() > new Date(y, m, d, hour, min).getTime();
  console.log("compare", new Date(y, m, d, hour, min), new Date(), compare);

  if (compare) {
    const video = `https://www.youtube.com/embed/${url}`;

    return (
      // eslint-disable-next-line jsx-a11y/iframe-has-title
      <iframe
        frameborder="0"
        src={video}
        allow="accelerometer; autoplay; picture-in-picture; fullscreen"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
        className="iframe"
      ></iframe>
    );
  } else {
    return (
      <div className="block">
        <img src={img} className="iframe" />
      </div>
    );
  }
}

function showDate(d, m, y, hour, min) {
  const compare = new Date().getTime() > new Date(y, m, d, hour, min).getTime();
  console.log("compare", new Date(y, m, d, hour, min), new Date(), compare);

  if (compare) {
    return <div className="data-video">LIBERADO</div>;
  } else {
    return (
      <div className="data-video">
        ESTRÉIA {d < 10 ? `0${d}` : d}/{m + 1}
      </div>
    );
  }
}

export { compareDate, showDate };
