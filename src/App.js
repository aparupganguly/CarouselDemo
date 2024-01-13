import React, { useState, useEffect } from "react";
import img1 from "./Res/Images/LOGO/image7.png";
import img2 from "./Res/Images/LOGO/image6.png";
import img3 from "./Res/Images/LOGO/image5.png";
import img4 from "./Res/Images/LOGO/image4.png";
import img5 from "./Res/Images/LOGO/image3.png";
import img6 from "./Res/Images/LOGO/image2.png";
import img7 from "./Res/Images/LOGO/image1.png";
const App = () => {
  // const images = Array(100000).fill([
  //   { img1 },
  //   { img2 },
  //   { img3 },
  //   { img4 },
  //   { img5 },
  //   { img6 },
  //   { img7 },
  // ]);

  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const nextPercentageUnconstrained =
      prevPercentage - (mouseDelta / maxDelta) * 100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100,
    );

    setPercentage(nextPercentage);

    const track = document.getElementById("image-track");
    if (track) {
      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = track.getElementsByClassName("image");
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    }

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" },
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" },
      );
    }
  };

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <>
      <div
        id='image-track'
        data-mouse-down-at='0'
        data-prev-percentage='0'
        onMouseDown={handleOnDown}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onMouseUp={handleOnUp}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onMouseMove={handleOnMove}
        a
        onTouchMove={(e) => handleOnMove(e.touches[0])}>
        <img className='image' draggable='false' src={img1} alt='' />
        <img className='image' draggable='false' src={img2} />
        <img className='image' draggable='false' src={img3} />
        <img className='image' draggable='false' src={img4} />
        <img className='image' draggable='false' src={img5} />
        <img className='image' draggable='false' src={img6} />
        <img className='image' draggable='false' src={img7} />
        <img className='image' draggable='false' src={img1} alt />
        <img className='image' draggable='false' src={img2} />
        <img className='image' draggable='false' src={img3} />
        <img className='image' draggable='false' src={img4} />
        <img className='image' draggable='false' src={img5} />
        <img className='image' draggable='false' src={img6} />
        <img className='image' draggable='false' src={img7} /> 

      </div>
    </>
  );
};

export default App;
